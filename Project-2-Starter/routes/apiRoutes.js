const db = require("../models");

module.exports = function(app) {
  // Get all articles COMPARE WITH THE MODEL.
  app.get("/api/articles", function(req, res) {
    db.Article.findAll({}).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });

  // Create a new example
  app.post("/api/articles", function(req, res) {
    db.Article.create(req.body).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });

  // Delete an example by id
  app.delete("/api/articles/:id", function(req, res) {
    db.Article.destroy({ where: { id: req.params.id } }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });
};
