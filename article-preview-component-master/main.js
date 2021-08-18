let profileSocialMedia = document.querySelector('.profile--active');
let button = document.querySelector('.button');

button.addEventListener('click', () => {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    profileSocialMedia.classList.remove('active');
  } else {
    button.classList.add('active');
    profileSocialMedia.classList.add('active');
  }
});
