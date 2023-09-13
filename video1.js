// console.log("hello Arvind ")

const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html>
  <head>
      <style>
          /* CSS for the button */
          .my-button {
              background-color: #007bff; /* Button background color */
              color: #fff; /* Text color */
              padding: 10px 20px; /* Padding around text */
              border: none; /* Remove button border */
              border-radius: 5px; /* Rounded corners */
              cursor: pointer; /* Cursor style on hover */
          }
  
          /* CSS for button hover effect */
          .my-button:hover {
              background-color: #0056b3; /* Button background color on hover */
          }
      </style>
  </head>
  <body>
      <button class="my-button">Click Me</button>
  </body>
  </html>
  `);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});