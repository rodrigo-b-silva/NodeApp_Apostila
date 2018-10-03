process.env.PORT = process.env.PORT || 27017
const setupApp = require('./src/app');

setupApp()
    .then(app => app.listen(3000, () => console.log(`App rodando na porta 3000`)))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })