import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "kyle.s.hinks@outlook.com",
    pass: "Redredred123",
  },
});

const mailOptions = {
  from: "kyle.s.hinks@outlook.com",
  to: "kyle.s.hinks1997@gmail.com",
  subject: "test",
  text: "test text",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("sent:", info.response);
});
