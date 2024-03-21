const passport = require("passport");
const {Strategy, ExtractJwt } = require("passport-jwt");
const Usuarios  = require("../models/usuariosModel");

const jwt_secret = '##%dasdasd##';

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret
    },
    async (jwtPayLoad, done) => {
        try {
            const usuario = await Usuarios.findById({usuarioid: jwtPayLoad.id})
            if (!usuario) {
                const error = new Error('Usuario no encontrado')
                console.log(error);
            }
            done(null, usuario);

        } catch (err) {
            done(err);
        }
    }
);

passport.use(strategy);

const initialize = () => {
    return passport.initialize();
};

const authenticate = () => {
    return passport.authenticate('jwt', {session: false})
};

module.exports = {
    initialize,
    authenticate,
};
