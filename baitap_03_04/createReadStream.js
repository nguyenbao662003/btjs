var http = require('http')
var fs = require('fs')
http
    .createServer(function (req, res) {
        const fileStream = fs.createReadStream('./baitap_03_04/content/bigFile.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)