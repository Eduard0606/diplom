// Переключение иконок меню
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Секция скрола
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Активные ссылки
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //   Анимация для секций при скроле
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // липкий заголовок
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Удаление значка переключения и панель навигации при нажатии на ссылки панели навигации
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const boxes = Array.from(document.querySelectorAll(".box")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
  e.preventDefault(); // сбрасываем стандартное поведение
  let currentBox = e.target.closest(".box"); // определяем текущий бокс
  let currentContent = e.target.nextElementSibling; // находим скрытый контент
  currentBox.classList.toggle("active"); // присваиваем ему активный класс
  if (currentBox.classList.contains("active")) {
    // если класс активный ..
    currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
  } else {
    // в противном случае
    currentContent.style.maxHeight = 0; // скрываем контент
  }
}
JavaScript
