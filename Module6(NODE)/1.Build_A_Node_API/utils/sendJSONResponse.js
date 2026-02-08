export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = statusCode
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.end(JSON.stringify(payload))
}