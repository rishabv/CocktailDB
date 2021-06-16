module.exports = {
    development : (config) => ({
        api: 'https://www.thecocktaildb.com/api/json/v1/1', //process.env.API_ENDPOINT,
    }),
    production : (config) => ({
        api: 'https://www.thecocktaildb.com/api/json/v1/1', //process.env.API_ENDPOINT,
    })
};
