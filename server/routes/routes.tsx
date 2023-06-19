const _portfolioRoutes = require('./portfolio.tsx');

const routes = (app, fs) => {
    _portfolioRoutes(app, fs);
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/api', function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send('{"message":"Hello from the custom server!"}');
    });
};

module.exports = routes;
