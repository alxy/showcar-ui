// removed from build step
module.exports = (url, selectors) => {
    const request = require('request');
    return done => {
        request(url, (err, res, body) => {
            if (err) {
                return done(err);
            }

            if (res.statusCode !== 200) {
                return done(new Error(url + ', Status Code: ' + res.statusCode));
            }

            return done();
        });
    };
};
