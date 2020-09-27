const crypto_with_async = require('./crypto_with_async');

const http = require('http');

const server = http.createServer()
server.on('request', async (req, res) => {
    let data = '';
    data = await crypto_with_async.executeRandomSecureAsync();
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(3000);