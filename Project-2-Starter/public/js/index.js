// Slider effect
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 4000
});

// $('#textarea1').val('New Text');
M.textareaAutoResize($("#textarea1"));

$("#addArt").on("click", event => {
  event.preventDefault();
  let newArticle = {
    name: $("#name")
      .val()
      .trim(),
    photo: $("#photo")
      .val()
      .trim(),
    title: $("#artTitle")
      .val()
      .trim(),
    body: $("#textarea1")
      .val()
      .trim()
  };
  console.log(newArticle);
  //sequelize to add a newArticle in the database
});
