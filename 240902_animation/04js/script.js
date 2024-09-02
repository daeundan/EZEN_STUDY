const tl = anime.timeline({
  easing: "linear",
  duration: 1000,
});

tl.add({
  targets: ".circle1",
  translateX: 500,
})
  .add({
    targets: ".circle1",
    translateY: 500,
  })
  .add({
    targets: ".circle1",
    translateX: 0,
  })
  .add({
    targets: ".circle1",
    translateY: 0,
  })
  .add({
    targets: ".circle2",
    scale: 1.5,
    translateX: -300,
    borderRadius: 0,
  })
  .add({
    targets: ".circle2",
    translateY: -300,
  })
  .add({
    targets: ".circle2",
    translateX: 0,
  })
  .add({
    targets: ".circle2",
    scale: 1,
    borderRadius: 50,
    translateY: 0,
  });
