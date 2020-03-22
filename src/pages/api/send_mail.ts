import aws from 'aws-sdk';

// Configure email
aws.config.update({
  accessKeyId: process.env.VALPAS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.VALPAS_AWS_SECRET_ACCESS_KEY,
  region: "eu-west-1",
});

const ses = new aws.SES({ apiVersion: '2010-12-01' });
const fromEmail = 'info@valpas.io';

const getParams = (to, subject, html) => ({
  Destination: {
    ToAddresses: to,
    BccAddresses: ["info@valpas.io"],
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: html,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: subject,
    },
  },
  Source: fromEmail,
})


const sendEmail = async (to, subject, html) => {
  const response = await ses.sendEmail(getParams(to, subject, html)).promise();
  console.log(response);
}

export default async (req, res) => {
  try {
    const { name, hotel, from, to, subject, content } = req.body;
    const introMessage = `Dear ${name} (${from}),<br>Thank you for staying safe and requesting a gift card for your future trip.<br><br>Estimated ${hotel}, here's a request from ${name} to buy a gift card to your hotel.<br>You can answer them directly at ${from} to sell them a gift card!<br><br>We made this introduction as a part of our Stay Safe campaign, read more about it here: https://valpashotels.com/stay-safe <br>Hopefully we were able to help, and feel free to contact us if you need anything :)<br><br>Valpas<br>`;
    const formattedContent = content.replace(/\n/g, '<br>');
    const emailContent = `${introMessage}<br>-------<br> ${formattedContent}`;
    const recipients = [from, to];
    await sendEmail(recipients, subject, emailContent);
    res.send(204);
  } catch (err) {
    console.log("Error sending email", err);
  }
}