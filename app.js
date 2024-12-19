const express = require('express');
const app = express();
const port = 4004;
const requestify = require('requestify');

require('dotenv').config();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    avatar: '',
  });
});

app.get('/api', (req, res) => {
  console.log(process.env.backendurl);
  requestify.get(process.env.backendurl).then(function (response) {
    const resBody = response.getBody();
    console.log(resBody);
    res.render('index', {
      avatar: resBody.avatar,
    });
  });
});

app.listen(port, () => {
  console.log(`ECS frontend app listening on port ${port}`);
});
