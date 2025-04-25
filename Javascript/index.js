const menuToggle = document.getElementById('menu-toggle');
  const slantedSidebar = document.getElementById('slanted-sidebar');
  const closeIcon = document.getElementById('close-icon');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  menuToggle.addEventListener('click', () => {
    slantedSidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
  });
  
  closeIcon.addEventListener('click', () => {
    slantedSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });
  
  sidebarOverlay.addEventListener('click', () => {
    slantedSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  let slideIndex = 0;
  const slides = document.querySelectorAll('.mySlides');
  const leftBtn = document.getElementById('left');
  const rightBtn = document.getElementById('right');
  
  // Slide göstərmək funksiyası
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  // Slide dəyişdirmək funksiyası
  function moveSlide(direction) {
    slideIndex += direction;
  
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
  
    showSlide(slideIndex);
  }
  
  // Başlanğıcda ilk slide-ı göstər
  showSlide(slideIndex);
  
  // Buttonlara klik üçün dinləyicilər
  leftBtn.addEventListener('click', () => {
    moveSlide(-1);
    resetAutoSlide(); // istifadəçi klik edəndə avtomatik slayder sıfırlansın
  });
  rightBtn.addEventListener('click', () => {
    moveSlide(1);
    resetAutoSlide();
  });
  
  // ✅ AUTO SLIDE FUNKSİYASI
  let autoSlide = setInterval(() => {
    moveSlide(1);
  }, 3000); // hər 5 saniyədən bir slayd dəyişəcək
  
  // Avtomatik slaydı sıfırlamaq (istifadəçi klik edəndə)
  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      moveSlide(1);
    }, 3000);
  }
  
  const leftButton = document.querySelector('.scroll-left-btn');
  const rightButton = document.querySelector('.scroll-right-btn');
  const teamWrapper = document.querySelector('.team-wrapper');
  
  function updateScrollButtons() {
    const maxScrollLeft = teamWrapper.scrollWidth - teamWrapper.clientWidth;
    leftButton.disabled = teamWrapper.scrollLeft <= 0;
    rightButton.disabled = teamWrapper.scrollLeft >= maxScrollLeft;
  }
  
  // İlk vəziyyəti yoxla
  updateScrollButtons();
  
  // Scroll hadisəsində düymələrin vəziyyətini yenilə
  teamWrapper.addEventListener('scroll', updateScrollButtons);
  
  // Sol düymə
  leftButton.addEventListener('click', () => {
    teamWrapper.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  });
  
  // Sağ düymə
  rightButton.addEventListener('click', () => {
    teamWrapper.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  });
  