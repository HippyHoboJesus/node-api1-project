const server = require('./server');

const port = 9000;

// START YOUR SERVER HERE

server.listen(port, () => {
    console.log("listening on", port)
})
