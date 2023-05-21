
var main = require('./src/main')    
var cors = require('cors')

var port = process.env.PORT || 8080  // establecemos nuestro puerto


const app = main.app;

app.use(cors());

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)