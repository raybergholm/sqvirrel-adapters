const nodeHttpsRequest = require("./src/nodeHttpsRequest");
const superagent = require("./src/superagent");
const xmlHttpRequest = require("./src/xmlHttpRequest");

const polyfill = () => {
    if (superagent) {
        return superagent;
    } else if (nodeHttpsRequest) {
        return nodeHttpsRequest;
    } else if (xmlHttpRequest) {
        return xmlHttpRequest;
    } else {
        throw new Error("Could not instantiate any adapter!");
    }
};

module.exports = {
    nodeHttpsRequest,
    superagent,
    xmlHttpRequest,
    polyfill
};