const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views',path.join(__dirname,'views'));
app.set('views engine','pug');

app.use(express.static(path.join(__dirname,'public')));

app.use(require('./routes/index.js'));
app.use(require('./routes/registrate.js'));
app.use(require('./routes/usuario.js'));
app.use(require('./routes/contactanos.js'));
app.use(require('./routes/administrador.js'));
app.use(require('./routes/xbox1.js'));
app.use(require('./routes/xbox2.js'));
app.use(require('./routes/xbox3.js'));

app.listen(3000, () =>{
    console.log('puerto 3000');
});