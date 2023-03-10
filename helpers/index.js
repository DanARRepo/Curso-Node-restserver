const dbValidators = require('./db-validators');
const generateJWT = require('./generate-jsw');
const googleVerify = require('./google-verify');
const uploadFile = require('./upload-file');

module.exports = {
    ...dbValidators,
    ...generateJWT,
    ...googleVerify,
    ...uploadFile
}