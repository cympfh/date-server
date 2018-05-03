const argv = require('argv');
const express = require('express');
const app = express();
const {execFile} = require('child_process');

argv.option({
    name: 'port',
    short: 'P',
    type: 'int'
});
const args = argv.run();

app.get('/', (req, res) => {
    execFile('date', (err, stdout, stderr) => {
        if (err) res.send(err);
        else res.send(stdout);
    });
});

const port = args.options.port || 8100;
console.log(`listen on port=${port}`);
app.listen(port);
