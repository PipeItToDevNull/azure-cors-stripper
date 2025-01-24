const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const originalUrl = req.query.url;
    if (!originalUrl) {
        context.log('No URL provided in the query string.');
        context.res = {
            status: 400,
            body: "Please pass a URL on the query string"
        };
        return;
    }

    context.log(`Original URL: ${originalUrl}`);

    try {
        const response = await axios.get(originalUrl, { responseType: 'arraybuffer' });
        context.log('Successfully downloaded the item.');

        context.res = {
            status: 200,
            body: response.data,
            headers: {
                'Content-Type': response.headers['content-type'],
                // Add any other headers you need, but exclude CORS headers
            }
        };
    } catch (error) {
        context.log(`Failed to download the item. Error: ${error.message}`);
        context.res = {
            status: error.response ? error.response.status : 500,
            body: `Failed to download the item. Error: ${error.message}`
        };
    }
};
