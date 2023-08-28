// const animateArea = document.querySelector('.my-img');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       animateArea.classList.add('visible');
//     } else {
//       animateArea.classList.remove('visible');
//     }
//   });
// }, {
//   threshold: 0.5
// });

// observer.observe(animateArea);

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  document.querySelectorAll('img').forEach(el => {
    Obs.observe(el, obsOptions);
  });