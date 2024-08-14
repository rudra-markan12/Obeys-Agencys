var tl = gsap.timeline();
tl.from(".line h1", {
  y: 200,
  stagger: 0.2, // ek ek kr k aa rhe hai
  delay: 0.4,
  duration: 1,
});

tl.from("#line1-part1 , .line h2", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
      console.log(grow);
    }, 20);
  },
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 2.8,
});
