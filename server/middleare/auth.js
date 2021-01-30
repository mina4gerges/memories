import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {

    try {
        const token = req.header.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodeDecode;

        if (token) {
            if (isCustomAuth) {
                decodeDecode = jwt.verify(token, 'test');

                req.userId = decodeDecode?.id;
            } else {
                decodeDecode = jwt.decode(token);

                req.userId = decodeDecode?.id;
            }
        }

        next();
    } catch (e) {
        console.log(e);
    }
}

export default auth;
