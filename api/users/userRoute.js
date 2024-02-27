import express from "express";
const router = express.Router();

router.post("/register", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    // a method provided by the package, abstracts away our interaction with DB
    User.register({ username: username }, password, async function (err, user) {
      if (err) {
        console.error(err);
        res.status(401).send(err);
        return;
      }
  
      // if the user was successfully authenticated
      passport.authenticate("local")(req, res, async function () {
        res.send(true);
      });
    });
  });
  
  router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    const user = new User({
      username: username,
      password: password,
    });
  
    req.login(user, function (err) {
      if (err) {
        console.error(err);
        res.status(401).send(err);
        return;
      }
  
      passport.authenticate("local")(req, res, function () {
        res.send(true);
      });
    });
  });
  
  router.get("/logout", (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.send(false);
    });
  });
  
  router.get("/authstatus", async (req, res) => {
    res.send(req.isAuthenticated());
  });

  export { router as userAuthRoutes};