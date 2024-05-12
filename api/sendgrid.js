const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

module.exports = async (req, res) => {
  // Ensure that we're dealing with a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Parse the JSON body manually
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', async () => {
    try {
      const { fornavn, efternavn, email, telefon, besked } = JSON.parse(data);

      const content = {
        to: 'pau@pksmedeservice.dk',
        from: 'pksmedeservice.kontakt@gmail.com',
        subject: `Ny Besked fra ${fornavn} ${efternavn}`,
        text: `Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nTelefon: ${telefon}\nBesked: ${besked}`,
      };

      await sendgridMail.send(content);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res
        .status(500)
        .json({ error: 'Error sending email', details: error.toString() });
    }
  });
};
