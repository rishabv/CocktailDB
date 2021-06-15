module.exports = {
    development : (config) => ({
        api: 'https://gorest.co.in/public-api', //process.env.API_ENDPOINT,
        image_url:"https://api.alysei.com"
    }),
    production : (config) => ({
        api: 'http://alysei.ibyteinfomatics.com/public/api', //process.env.API_ENDPOINT,
        image_url:"https://api.alysei.com"
    })
};
