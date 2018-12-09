const db = require("../models");

module.exports = function(app) {
  // Get all articles COMPARE WITH THE MODEL.
  app.get("/api/articles", function(req, res) {
    db.Article.findAll({}).then(function(dbArticles) {
      res.json(dbArticles);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
