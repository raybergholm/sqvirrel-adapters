const _options = async ({ host, port, restPath, headers = null, ...others }) => {
    // Implement your OPTIONS handler here
};

const _head = async ({ host, port, restPath, headers = null, query = null, ...others }) => {
    // Implement your HEAD handler here
};

const _get = async ({ host, port, restPath, headers = null, query = null, ...others }) => {
    // Implement your GET handler here
};

const _post = async ({ host, port, restPath, headers = null, query = null, body = null, ...others }) => {
    // Implement your POST handler here
};

const _put = async ({ host, port, restPath, headers = null, query = null, body = null, ...others }) => {
    // Implement your PUT handler here
};

const _delete = async ({ host, port, restPath, headers = null, query = null, ...others }) => {
    // Implement your DELETE handler here
};

module.exports = {
    _options,
    _get,
    _head,
    _post,
    _put,
    _delete
};