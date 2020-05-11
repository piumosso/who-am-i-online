const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const manifest = require('../manifest.json');
const {v4: uuid} = require('uuid');


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
  <script type="text/javascript" src="/socket.io.js"></script>
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


const GAMES = {};


io.on('connection', function (socket) {
  socket.on('createGame', () => {
    const gameId = uuid();
    const adminId = uuid();

    GAMES[gameId] = {
      id: gameId,
      players: [
        {
          id: adminId
        }
      ],
      state: 'waiting'
    };
    socket.emit('gameCreated', GAMES[gameId])
  });

  socket.on('fetchGame', (gameId) => {
    socket.emit('gameUpdated', GAMES[gameId])
  });
});


server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
