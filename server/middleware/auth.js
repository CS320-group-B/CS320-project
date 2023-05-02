const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const isCustomAuth = token.length < 500; 

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({ error: 'Please authenticate.' });
    }
}

module.exports = auth;