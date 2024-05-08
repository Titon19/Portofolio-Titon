function detailInfo(e) {
  let target = $(e.target);

  let item = $(target).parents(".about-exp-item");
  let detail = $(item).children(".about-exp-item-detail");
  $(detail).slideToggle();

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }
}

// $(document).ready(function () {
// Seleksi elemen navbar saat dokumen siap
let navbar = $(".navbar");

// Fungsi untuk menambahkan atau menghapus kelas bayangan saat navbar di-scroll
function toggleNavbarShadow() {
  if ($(window).scrollTop() > 0) {
    navbar.addClass("navbar-scrolled");
  } else {
    navbar.removeClass("navbar-scrolled");
  }
}
// Tambahkan event listener pada jendela untuk mendeteksi scroll
$(window).scroll(toggleNavbarShadow);
// });

// $(".imgPorto").addClass("fadeout");
// $(".imgPorto").removeClass("fadeout");
