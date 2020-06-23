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
            console.error('collection threw the following error while executing: ', err === undefined ? summary.err : err)
        } 
        console.log(summary.run.failures);
        console.log(summary.run.stats);
        //if (summary.run.failures.length > 0) {
             
        //}
    });
