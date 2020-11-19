const EventEmitter = require('events');

const DOS_Detector = require('./dosDetector');
const dos_detector = new DOS_Detector(1000);

dos_detector.on('DosDetected fired', (arg) =>{
    console.log('fired a missile', arg);
});

dos_detector.addUrl('http');
//dos_detector.addUrl('http');
setTimeout( () => { dos_detector.addUrl('http')},990);









