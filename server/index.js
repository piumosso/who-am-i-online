const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const manifest = require('../manifest.json');


// Шаблон обёртки страницы
const template = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Кто я?</title>
  <link data-react-helmet="true" rel="stylesheet" href="/${manifest['bundle.css']}" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu&display=swap" rel="stylesheet" />
</head>
<body>
  <script type="text/javascript" src="./socket.io.js"></script>
  <script type="text/javascript" src="/${manifest['bundle.js']}" ></script>
</body>
</html>
`;


const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static('public'));
app.get('*', (req, res) => res.send(template));


io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
