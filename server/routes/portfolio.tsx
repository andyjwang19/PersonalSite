const portfolioParamCheck = (type) => {
    if (type === undefined || (type !== 'bartending' && type !== 'code' && type !== 'design')) {
        return 1;
    }
    return 0;
};

const portfolioRoutes = (app, fs) => {
    // app.get('/portfolio', (req, res) => {
    //     // const portfolioType = parseInt(req.params.type);
    //     // console.log(portfolioType);
    //     fs.readFile(dataPath, 'utf8', (err, data) => {
    //         if (err) {
    //             throw err;
    //         }

    //         res.send(JSON.parse(data));
    //     });
    // });
    app.get('/portfolio/:type', (req, res) => {
        const portfolioType = req.params.type;
        if (portfolioParamCheck(portfolioType) === 1) {
            throw new Error('Invalid Portfolio Type');
        }

        const dataPath = `routes/data/${portfolioType}PortfolioData.json`;
        console.log(portfolioType);
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    app.get('/portfolio/:type/:entryId', (req, res) => {
        const portfolioType = req.params.type;
        const entryId = parseInt(req.params.entryId);
        if (portfolioParamCheck(portfolioType) === 1) {
            throw new Error('Invalid Portfolio Type');
        }

        const dataPath = `routes/data/${portfolioType}PortfolioData.json`;
        console.log(portfolioType);
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const entries = JSON.parse(data).entries;
            const currentEntry = entries.find((entry) => entry.entryId === entryId);
            if (currentEntry === undefined) {
                throw new Error('Invalid entry ID');
            }
            res.send(currentEntry);
        });
    });
};

module.exports = portfolioRoutes;
