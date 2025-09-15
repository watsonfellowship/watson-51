$(document).ready(function() {

  // // add "visible" class to other elements when they enter the viewport, via IntersectionObserver
  const items = document.querySelectorAll('.js-inview');
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('js-inview--visible');
        observer.unobserve(entry.target);
      }
    });
  });

  items.forEach(item => {
    observer.observe(item);
  });
  
});
