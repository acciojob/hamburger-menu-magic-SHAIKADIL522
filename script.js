//your JS code here. If required.
const ham = document.querySelector('.ham');
const navSub = document.querySelector('.nav-sub');

ham.addEventListener('click', () => {
  navSub.classList.toggle('show');
  ham.classList.toggle('open');
});