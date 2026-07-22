// case-study-v2.js — shared behavior for all modernized case study pages

document.addEventListener('DOMContentLoaded', function () {
  // Insert scroll-progress bar into header
  var header = document.querySelector('header');
  if (header) {
    var bar = document.createElement('div');
    bar.id = 'scroll-progress';
    header.appendChild(bar);

    function updateProgress() {
      var scrolled = window.scrollY;
      var height = document.documentElement.scrollHeight - window.innerHeight;
      var pct = height > 0 ? (scrolled / height) * 100 : 0;
      bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // Tag major blocks as reveal targets
  document.querySelectorAll('.lede, .section, .other-projects').forEach(function (el) {
    el.classList.add('reveal');
  });

  var targets = document.querySelectorAll('.reveal, .imgrow img, .lede img');
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '-40px 0px' }
  );
  targets.forEach(function (el) {
    io.observe(el);
  });
});
