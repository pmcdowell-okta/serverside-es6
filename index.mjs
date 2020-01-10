// server.js
// where your node app starts

// init project
import express from 'express'

const app = express();
import  cmd  from 'node-cmd'

import path from 'path'
const __dirname = path.resolve();

console.log ( __dirname )


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/git', (req, res) => {
  // If event is "push"
  
  cmd.run('chmod 777 git.sh'); /* :/ Fix no perms after updating */
  cmd.get('./git.sh', (err, data) => {  // Run our script
    if (data) console.log(data);
    if (err) console.log(err);
  });
  cmd.run('refresh');  // Refresh project

  console.log("> [GIT] Updated with origin/master");

  return res.sendStatus(200); // Send back OK status
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});



