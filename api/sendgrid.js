const sendgridMail = require("@sendgrid/mail");

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY); // Ensure this is set in Vercel's environment variables

module.exports = async (req, res) => {
  // Ensure we're dealing with a POST request
  if (req.method === "POST") {
    // Parse the incoming JSON payload
    const { fornavn, efternavn, email, telefon, besked } = JSON.parse(req.body);

    const content = {
      to: "pau@pksmedeservice.dk",
      from: "pksmedeservice.kontakt@gmail.com",
      subject: `Ny Besked fra ${fornavn} ${efternavn}`,
      text: `Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nTelefon: ${telefon}\nBesked: ${besked}`,
      html: `<p>Email: ${email}</p><p>Telefon: ${telefon}</p><p>Besked: ${besked}</p>`,
    };

    try {
      await sendgridMail.send(content);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email", error);
      return res
        .status(500)
        .json({ error: "Error sending email", details: error.toString() });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};
