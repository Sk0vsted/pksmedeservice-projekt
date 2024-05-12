const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let data = '';
  req.on('data', (chunk) => {
    data += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const body = JSON.parse(data);
      const { fornavn, efternavn, email, telefon, besked } = body;
      const content = {
        to: 'pau@pksmedeservice.dk',
        from: 'pksmedeservice.kontakt@gmail.com',
        subject: `Ny Besked fra ${fornavn} ${efternavn}`,
        text: `Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nTelefon: ${telefon}\nBesked: ${besked}`,
      };

      await sendgridMail.send(content);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error:', error);
      res
        .status(500)
        .json({ error: 'Error processing request', details: error.message });
    }
  });
};
