$(function () {
  // Theme switcher
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") $("body").addClass("light");
  $("#themeToggle").on("click", function () {
    $("body").toggleClass("light");
    localStorage.setItem("portfolio-theme", $("body").hasClass("light") ? "light" : "dark");
  });

  // Mobile menu
  $(".menu-btn").on("click", function () { $("nav").toggleClass("open"); });

  // Animated counters
  $("[data-count]").each(function () {
    const el = $(this), target = Number(el.data("count")), start = 0, duration = 900;
    $({ v: start }).animate({ v: target }, { duration, step: function (now) { el.text(Math.floor(now)); }, complete: function () { el.text(target + "+"); } });
  });
  // Cursor glow
  $(document).on("mousemove", function (e) { $(".cursor-glow").css({ left: e.clientX, top: e.clientY }); });

  // Subtle tilt on desktop
  $(".tilt").on("mousemove", function (e) {
    const r = this.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    $(this).css("transform", `perspective(700px) rotateX(${(y - r.height / 2) / -25}deg) rotateY(${(x - r.width / 2) / 25}deg) translateY(-3px)`);
  }).on("mouseleave", function () { $(this).css("transform", ""); });

  // Keyboard shortcut: H = home
  $(document).on("keydown", function (e) { if (e.key.toLowerCase() === "h" && !$(e.target).is("input,textarea")) location.href = "index.html"; });
});