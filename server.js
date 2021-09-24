const app = require('express')();
const exphbs  = require('express-handlebars');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

io.on('connection', function(socket) {
    console.log('A user connected');

    socket.on('call', function (payload) {
        console.log('call triggered', payload);
     });
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });

http.listen(3000, () => console.log("Listening on 3000"));