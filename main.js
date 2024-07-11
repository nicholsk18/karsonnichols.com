const els = Array.from(document.querySelectorAll(".project-section"));
els.forEach((el) => {
  addObserver(el);
});

function addObserver(el) {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          // console.log(entry.target.dataset.stop)
          // callback(entry.target)
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(el);
}
