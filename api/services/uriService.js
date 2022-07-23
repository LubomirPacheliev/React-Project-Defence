const decodeURIBody = async bodyURI => {
    const body = await JSON.parse(Array.from(Object.keys(bodyURI))[0]);
    return body;
}

module.exports = {
    decodeURIBody
}