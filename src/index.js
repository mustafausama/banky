const app = require('./app');

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`Example app listening at ${port}`);
        });
    } catch(err) {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
    }
}

start();
