require('dotenv').config();
const app = require('./app');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(require('./routes/auth.routes.index'));
app.use(require('./routes/info.routes'))
app.use(require('./routes/admin.routes'))
app.use(require('./routes/j4.routes'))


async function main(){
    app.listen(process.env.AWS_PORT||3001);
    console.log(`Service on port ${process.env.AWS_PORT}`);
}

main();