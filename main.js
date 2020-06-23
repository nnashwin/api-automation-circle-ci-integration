const nm = require('newman');

nm.run({
    collection: require('./default.postman_collection.json'),
    reporters: 'cli'
})
    .on('start', (err, args) => {
        console.log('running meepshop collection')
    })
    .on('done', (err, summary) => {
        if (err || summary.error) {
            console.error('postman collection threw the following execution error: ', err === undefined ? summary.err : err)
        } 

        if (summary.run.failures.length > 0) {
            console.error(`
Test Assertions Failed: Postman collection contained the following failed tests:
            `);
            for (var err of summary.run.failures) {
                console.error(err.error)
            }

            process.exit(1);
        }
    });
