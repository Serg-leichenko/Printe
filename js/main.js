let menu = document.querySelectorAll(".navList");

if (menu) {
  menu.forEach(function (navList) {
    navList.addEventListener('click', function (event) {
      event.target.closest('.navList').classList.toggle('active');
    });
  });
}