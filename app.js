//Now, Express is currently the most popular framework for creating Web apps and services

const express = require("express");
const app = express();
const port = 3003;
const middleware = require("./middleware");
const server = app.listen(port, () => {
  console.log("Server listening on port" + port);
});

app.use(express.static("views"));

// inside of views folder

//Routes
const loginRoute = require("./routes/loginRoutes");
app.use("/login", loginRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {
  var payload = {
    //     Now, payload is just a term used to to refer to the data we're sending to a function or to a page or

    // through request or something like that so I can save our payload.
    pageTitle: "Home",
  };
  res.status(200).render("home", payload);
});

// So this is basically saying when the root of our site is accessed, first execute this step here, which

// is not require login one, and then afterwards it will do this.

// So this is the next step in the cycle.

// So a route is basically the page, if you want to think of it like that.
