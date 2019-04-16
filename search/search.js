const knex     = require('./knex');
const nunjucks = require('nunjucks');
const Koa      = require('koa');
const Router   = require('koa-router');

const app  = new Koa();
var router = new Router();

router.get('/search/:name',async (ctx) => {
    let test = await knex.select('*').from('users').where('name', 'like', '%' + ctx.params.name + '%');
    ctx.body = nunjucks.render('index.html', {test});
});

app.use(router.routes());
app.listen(2000);