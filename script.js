// .addIndicators() // add indicators

var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

// init controller
var controller = new ScrollMagic.Controller();

// PRESENTATION TEXTE

new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.9,
  offset: 250, // move trigger to center of element
  reverse: false, // only do once
})

  .setClassToggle("#reveal1", "visible") // add class toggle
  .addTo(controller);

// SQUARE SECTION

// square1
new ScrollMagic.Scene({
  triggerElement: "#trigger-box-1",
  triggerHook: 0.9,
  offset: 0, // move trigger to center of element
  reverse: false, // only do once
})

  .setClassToggle("#box1", "visible") // add class toggle
  .addTo(controller);

// square2
new ScrollMagic.Scene({
  triggerElement: "#trigger-box-2",
  triggerHook: 0.9,
  offset: 150, // move trigger to center of element
  reverse: false, // only do once
})

  .setClassToggle("#box2", "visible") // add class toggle
  .addTo(controller);

//square3
new ScrollMagic.Scene({
  triggerElement: "#trigger-box-3",
  triggerHook: 0.9,
  offset: 250, // move trigger to center of element
  reverse: false, // only do once
})

  .setClassToggle("#box3", "visible") // add class toggle
  .addTo(controller);

// PROJECT SECTION

//projet1
new ScrollMagic.Scene({
  triggerElement: "#trigger-projet-1",
  triggerHook: 0.9,
  offset: 100, // move trigger to center of element
})

  .setClassToggle("#projet1", "visible") // add class toggle

  .addTo(controller);

//projet2
new ScrollMagic.Scene({
  triggerElement: "#trigger-projet-2",
  triggerHook: 0.9,
  offset: 100, // move trigger to center of element
})

  .setClassToggle("#projet2", "visible") // add class toggle
  .addTo(controller);

//projet3
new ScrollMagic.Scene({
  triggerElement: "#trigger-projet-3",
  triggerHook: 0.9,
  offset: 100, // move trigger to center of element
})

  .setClassToggle("#projet3", "visible") // add class toggle
  .addTo(controller);
