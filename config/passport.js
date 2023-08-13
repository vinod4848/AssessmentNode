const passport = require("passport");
const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const User = require("../models/User");
require("dotenv").config();

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, next) => {
    try {
      const user = await User.findById(jwtPayload.id);
      if (user) {
        return next(null, user);
      } else {
        return next(null, false);
      }
    } catch (error) {
      return next(error, false);
    }
  })
);
