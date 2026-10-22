(function () {
  var LIMIT = 6;
  var feed = document.getElementById("feed");
  if (!feed) return;
  var posts = Array.prototype.slice.call(feed.querySelectorAll(".post"));
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var more = document.getElementById("feed-more");
  var empty = document.getElementById("feed-empty");
  var filter = "All";
  var showAll = false;

  function update() {
    var matches = posts.filter(function (p) { return filter === "All" || p.getAttribute("data-kind") === filter; });
    posts.forEach(function (p) { p.hidden = true; });
    matches.forEach(function (p, i) { p.hidden = !showAll && i >= LIMIT; });
    empty.hidden = matches.length > 0;
    more.hidden = matches.length <= LIMIT;
    more.textContent = showAll ? "Show fewer" : "Show all " + matches.length + " posts";
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === filter)); });
  }

  chips.forEach(function (c) {
    c.addEventListener("click", function () { filter = c.getAttribute("data-filter"); showAll = false; update(); });
  });
  more.addEventListener("click", function () { showAll = !showAll; update(); });
  update();
})();
