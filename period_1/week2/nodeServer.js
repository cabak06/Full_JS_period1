const os_details = require('./simple_OS_file');
const http = require('http');
const EventEmitter = require('events');
const DOS_Detector = require('./dosDetector');

const dos_detector = new DOS_Detector(10000);

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    
    dos_detector.addUrl(req.url);

    res.setHeader('Content-Type', 'application/json');
    
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(os_details.os_Obj));
    
    return res.end();
  }
  if (req.url === '/') {
    dos_detector.addUrl(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  //dos_detector.addUrl(sock.remoteAddress());
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
dos_detector.on('DosDetected fired', (arg) =>{
  console.log('fired a missile', arg);
});