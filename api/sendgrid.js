const sendgridMail = require("@sendgrid/mail");
sendgridMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

module.exports = async (req, res) => {
  // Sæt CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Overvej at begrænse dette til specifikke domæner i produktion
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Håndter OPTIONS metode for CORS preflight anmodninger
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // Tjek at anmodningen er en POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Parse body data som JSON
  let data = "";
  req.on("data", (chunk) => {
    data += chunk.toString(); // konverter Buffer til string
  });

  req.on("end", async () => {
    try {
      const { fornavn, efternavn, email, telefon, besked } = JSON.parse(data);
      const content = {
        to: "pau@pksmedeservice.dk",
        from: "pksmedeservice.kontakt@gmail.com",
        subject: `Ny Besked fra ${fornavn} ${efternavn}`,
        text: `Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nTelefon: ${telefon}\nBesked: ${besked}`,
      };

      await sendgridMail.send(content);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email", error);
      res
        .status(500)
        .json({ error: "Error sending email", details: error.toString() });
    }
  });
};
