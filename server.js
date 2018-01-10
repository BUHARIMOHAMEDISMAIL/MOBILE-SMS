const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('https')
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))

const REQUIRE_AUTH = true
const AUTH_TOKEN = 'an-example-token'

app.get('/', function (req, res) {
  res.send('Use the /webhook endpoint.')
})
app.get('/webhook', function (req, res) {
  res.send('You must POST your request')
})


app.post('/jobpost', function (req, result) {
//   var action = req.body.result.action;
//   console.log(action);
//     var technology = req.body.result.parameters['technology'];    //last update
//     var joblocation = req.body.result.parameters['joblocation'];  //last update
//     var options = {
//       "method": "GET",
//       "hostname": "ustbotsearch.search.windows.net",
//       "port": null,
//       "path": "/indexes/ijp-index/docs?api-version=2016-09-01&%24filter=JobPostingExternal%C2%A0eq%20'YES'%20&querytype=full&%24top=50&search=Title%3A%22%22%20PrimarySkill%3A(%22" + technology + "%22)%20Primarylocation%3A%22" + joblocation + "%22%20Country%3A%22" + joblocation + "%22%20State%3A%22" + joblocation + "%22",
//       "headers": {
//         "content-type": "application/json; charset=utf-8",
//         "api-key": "1AF2593D94137D72051204F97E0BDC14"
//       }
//     };
//     http.get(options, res => {
//       res.setEncoding("utf8");
//       let body = "";
//       res.on("data", data => {
//         body += data;
//       });
//       res.on("end", () => {
//         var flag = [{ "source": "webhook" }];
//         body = JSON.parse(body);
//         var tmpbody = body;
//         flag.push(tmpbody);
//         var finresult = JSON.stringify(flag);
//         result.status(200).json({
//           source: 'webhook',
//           speech: finresult,
//           displayText: finresult
//         })
//       });
//     });
    result.send('result from webhook');


})



app.listen(app.get('port'), function () {
  console.log('* Webhook service is listening on port:' + app.get('port'))
})