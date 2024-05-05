const sendgridMail = require("@sendgrid/mail");
sendgridMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { fornavn, efternavn, email, telefon, besked } = req.body;

  const content = {
    to: "pau@pksmedeservice.dk",
    from: "pksmedeservice.kontakt@gmail.com",
    subject: `Ny Besked fra ${fornavn} ${efternavn}`,
    text: `Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nTelefon: ${telefon}\nBesked: ${besked}`,
  };

  try {
    await sendgridMail.send(content);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email", error);
    res
      .status(500)
      .json({ error: "Error sending email", details: error.toString() });
  }
};
