const { Pool } = require('pg');

const dblocal = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})
dblocal.connect().then(()=>console.log('Conexión  DB'));


module.exports = { dblocal };