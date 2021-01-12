const jwt = require('jsonwebtoken');
const auth = {
    sendAuthCookie: (req, res, data) => {
        const token = jwt.sign({
            id: data.id ? data.id : 0,
            email: data.email,
            pass: data.pass
          }, 'secret');
        res.header('Access-Control-Allow-Origin', "http://127.0.0.1:8082");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header( 'Access-Control-Allow-Credentials', true);
        data.message = 'Logging in...';
        data.error = false;
        res.cookie('authcookie', token, { maxAge: 90000000, httpOnly: true }).send(data);
    },
    checkToken : (req, res, next) => {
        //get authcookie from request
        const authcookie = req.cookies.authcookie;
        if (!authcookie) {
            next();
        } else {
            //verify token which is in cookie value
            jwt.verify(authcookie, 'secret', (err, data) => {
                if (err) {
                    console.log(err); // not authorized
                    next();
                } else if (data) {
                    req.user = data;
                    next();
                }
            });
        }
    }
};

module.exports = auth;