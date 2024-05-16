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

