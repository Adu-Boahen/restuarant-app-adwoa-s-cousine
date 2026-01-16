console.log('i am the best')
 
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.testimonial-card').length;
  let index = 0;

  function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 5000);


  