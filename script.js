document.addEventListener("DOMContentLoaded", function () {

  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }
  });


  // Smooth Scroll Arrow
  const heroArrow = document.querySelector(".hero-arrow");
  const reviewsSection = document.querySelector(".reviews");

  if (heroArrow && reviewsSection) {
    heroArrow.addEventListener("click", () => {
      reviewsSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  }


  // Carousel
  const track = document.querySelector(".carousel-track");
  const images = document.querySelectorAll(".carousel-img");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (track && images.length > 0 && nextBtn && prevBtn) {

    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });

  }

});
