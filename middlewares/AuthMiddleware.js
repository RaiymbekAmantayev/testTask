const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'importantsecret',
};

passport.use(
    new JwtStrategy(jwtOptions, (jwtPayload, done) => {

        if (jwtPayload.id) {
            return done(null, jwtPayload);
        } else {
            return done(null, false);
        }
    })
);

module.exports = passport;