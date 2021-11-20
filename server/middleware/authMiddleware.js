const jwt = require('jsonwebtoken');
const { secret } = require('../modules/config');

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        console.log('method', req.method);
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: 'Пользователь не авторизован' });
        }

        const decodedData = jwt.verify(token, secret);
        console.log('decoded', decodedData);
        req.user = decodedData;
        next();
    } catch (e) {
        console.log('отработал catch', e);
        return res.status(403).json({ message: 'Пользователь не авторизован' });
    }
};
