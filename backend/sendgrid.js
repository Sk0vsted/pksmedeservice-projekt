require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");
const sendgridMail = require("@sendgrid/mail");
const app = express();

app.use(cors());
app.use(express.json());

sendgridMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

app.post("/sendemail", async (req, res) => {
  const { fornavn, efternavn, email, telefon, besked } = req.body;

  const content = {
    to: "pau@pksmedeservice.dk",
    from: "pksmedeservice.kontakt@gmail.com",
    subject: `Ny Besked fra ${fornavn} ${efternavn}`,
    text: `Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nTelefon: ${telefon}\nBesked: ${besked}`,
    html: `<p>Email: ${email}</p><p>Telefon: ${telefon}</p><p>Besked: ${besked}</p>`,
  };

  try {
    await sendgridMail.send(content);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
