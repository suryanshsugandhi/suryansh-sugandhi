$(window).scroll(function () {
  if ($(window).scrollTop() >= 30) {
    $("nav").addClass("shadow-nav")
  } else {
    $("nav").removeClass("shadow-nav")
  }
})
