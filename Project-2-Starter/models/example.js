module.exports = function (sequelize, DataTypes) {
  const Article = sequelize.define("Article", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    photo: DataTypes.STRING,
    charities: DataTypes.STRING
  });
  return Article;
};

