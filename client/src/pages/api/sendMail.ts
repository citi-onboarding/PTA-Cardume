import nodemailer from 'nodemailer';

export default async function handler(req:any, res: any) {
  if (req.method === 'GET') {
    // Handle GET request for debugging
    return res.status(200).json({ message: 'Server is up and running!' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { marca, ramo, nome, email, phone, message } = req.body;

  const emailUser = "nodemailer@citi.org.br";
  const emailPass = "ckwl qdqe depd tvar";

  if (!emailUser || !emailPass) {
    return res.status(500).json({ error: 'Email credentials not provided' });
  }

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  // Email content
  const mailOptions = {
    from: emailUser,
    to: 'mariaclara302004@gmail.com',
    subject: 'Novo contato do site monitoresuamarca.com.br',
    html: `
      <p>Marca: ${marca}</p>
      <p>Ramo: ${ramo}</p>
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${phone}</p>
      <p>Mensagem: ${message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.log('Email not sent');
    res.status(500).json({ error: 'Error sending email' });
  }
}