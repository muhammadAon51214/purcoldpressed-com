const header = document.getElementById("header");
const banner = document.querySelector(".banar-sec");

function checkHeader() {
  const bannerHeight = banner.offsetHeight;

  if (window.scrollY > bannerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.addEventListener("load", checkHeader);
window.addEventListener("scroll", checkHeader);

// 111111111111111111111111
{const header = document.getElementById("header");
    const navItems = document.querySelectorAll(".main-link"); // har item jisme mega menu hai
    
    navItems.forEach(item => {
      item.addEventListener("mouseenter", () => {
        header.classList.add("menu-open");
      });
      item.addEventListener("mouseleave", () => {
        header.classList.remove("menu-open");
      });
    });
    }

// section-8---Amazing

const testimonials = [
    {
      quote: "Amazing! All the juices were delicious! It made the 3 day cleanse so easy. I plan to do it again!",
      author: "Debbie S."
    },
    {
      quote: "The cleanse was tasty and effortless. Highly recommend!",
      author: "Alex R."
    },
    {
      quote: "I feel refreshed and light. The juices were delicious!",
      author: "Maria T."
    }
  ];

  const quoteEl = document.getElementById("muja-quote");
  const authorEl = document.getElementById("muja-author");
  const dots = document.querySelectorAll(".muja-dot");
  const nextBtn = document.getElementById("muja-next");
  const prevBtn = document.getElementById("muja-prev");

  let current = 0;

  function showTestimonial(index) {
    quoteEl.classList.add("fade-out");
    authorEl.classList.add("fade-out");

    setTimeout(() => {
      quoteEl.textContent = testimonials[index].quote;
      authorEl.textContent = testimonials[index].author;

      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));

      quoteEl.classList.remove("fade-out");
      authorEl.classList.remove("fade-out");
    }, 500); // animation duration
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      current = index;
      showTestimonial(current);
    });
  });




// header-----
// -----

 const container = document.getElementById('comparisonContainer');
    const rightSection = container.querySelector('.right-section');
    const dividerLine = container.querySelector('.divider-line');
    let isDragging = false;
    let currentPosition = 50;

    function updatePosition(percentage) {
      currentPosition = Math.max(0, Math.min(100, percentage));
      container.style.setProperty('--position', currentPosition + '%');
      rightSection.style.clipPath = `polygon(${currentPosition}% 0, 100% 0, 100% 100%, ${currentPosition}% 100%)`;
      dividerLine.style.left = `calc(${currentPosition}% - 2px)`;
    }

    function handleStart(e) {
      isDragging = true;
      container.style.cursor = 'grabbing';
      e.preventDefault();
    }

    function handleMove(e) {
      if (!isDragging) return;
      const rect = container.getBoundingClientRect();
      const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      updatePosition(percentage);
    }

    function handleEnd() {
      isDragging = false;
      container.style.cursor = 'grab';
    }

    // Events
    container.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    container.addEventListener('touchstart', handleStart, { passive: false });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);

    // Initialize
    updatePosition(50);





    // section-bottles-----
    const swiper = new Swiper('.swiper', {
        slidesPerView: 6,   // ek bar me 6 bottles
        spaceBetween: 20,   // bottles ke darmiyan gap
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });




      const options = document.querySelectorAll('.targat-options');
      const cards = document.querySelectorAll('.card--2');
    
      // ✅ Default show first card only
      const firstTarget = options[0].getAttribute('data-targat');
      cards.forEach(card => {
        card.style.display = card.getAttribute('data-card') === firstTarget ? 'block' : 'none';
      });
    
      // ✅ On click event
      options.forEach(option => {
        option.addEventListener('click', () => {
          const target = option.getAttribute('data-targat');
    
          // Remove active from all and add to clicked
          options.forEach(o => o.classList.remove('active'));
          option.classList.add('active');
    
          // Show matching card only
          cards.forEach(card => {
            card.style.display = (card.getAttribute('data-card') === target) ? 'block' : 'none';
          });
        });
      });