const fs = require('fs')
fs.writeFile("hello-world.js","HELLO WORLD",err=>{
 err ? console.log(err):console.log("created with success")
})
// 
const http = require('http');
const server = http.createServer(function(req,res){
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end()
});
server.listen(3000,(err)=>{
    err ? console.log(err) : console.log('the server is running on port 3000')
});

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('File created and content written successfully');
});
fs.readFile("hello.txt",(err, file)=>{
  if(err){
    console.log(err)
  }else{
    console.log(file)
  }
});

const generatePassword = require('generate-password');

// Function to generate and log a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Length of the password
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    lowercase: true, // Include lowercase letters

  });

  console.log('Generated password:', password);
}

// Call the function to generate and log a random password
generateRandomPassword();

const nodemailer = require('nodemailer');

// Create a transporter object using the SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // or 465 for secure
    secure: false, // true for port 465, false for other ports
    auth: {
        user: 'khalfaouiazoz22@gmail.com', // your email address
        pass: '' // your email password or app password
    },
    tls: {
        rejectUnauthorized: false // allow self-signed certificates
    }
});

// Set up email data with unicode symbols
let mailOptions = {
    from: '"" <>', // sender address
    to: '', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});