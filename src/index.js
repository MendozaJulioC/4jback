require('dotenv').config();
const app = require('./app');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(require('./routes/auth.routes.index'));
app.use(require('./routes/info.routes'))
app.use(require('./routes/admin.routes'))
app.use(require('./routes/j4.routes'))


async function main(){
    app.listen(process.env.PORT||3001);
    console.log(`Service on port ${process.env.PORT}`);
}

main();