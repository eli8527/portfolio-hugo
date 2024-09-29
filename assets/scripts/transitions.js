export default (els) => {
  const options = {
    // rootMargin: "0px",
    threshold: 0.5,
  };
  
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.classList.add('transition-active');
      }
    })
  }, options);

  els.forEach((el) => {
    observer.observe(el)
  })
  
}