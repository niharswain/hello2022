const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/user-agent', (req, res) => {
  res.send(`User Agent: ${req.headers['user-agent']}`);
});
var listener = app.listen(process.env.PORT || 80, function() {
 console.log('listening on port ' + listener.address().port);
});

