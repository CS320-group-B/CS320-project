const bcrypt = require('bcrypt');

const save = async (req, res, next) => {
    if (!req.body.hasOwnProperty("password")){next()}
    req.body.password = await bcrypt.hash(req.body.password, 12)
    next();
}
module.exports = save;