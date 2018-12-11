const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  //Load the articles
  app.get("/read", function(req, res) {
    db.Article.findAll({}).then(function(dbArticles) {
      res.render("read", {
        article: dbArticles
      });
    });
  });

  // Load ar page and pass in an example by id
  app.get("/write", function(req, res) {
    res.render("write");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
