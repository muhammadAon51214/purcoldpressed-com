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