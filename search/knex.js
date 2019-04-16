module.exports = require('knex') ({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'nodeApp',
        password : 'nodeApp',
        database : 'training',
        charset: 'utf8'
    }
});