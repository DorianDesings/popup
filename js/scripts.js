const popupElement = document.getElementById('popup');
const buttonElement = document.getElementById('button');
const rootStyles = document.documentElement.style;

const generatePopup = (message, duration) => {
  popupElement.innerHTML = '';
  console.log(popupElement);
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  popupElement.classList.add('popup--show');
  popupElement.append(newMessage);
  let counterTime = 100;
  const intervalId = setInterval(() => {
    counterTime--;
    if (counterTime <= 0) {
      clearInterval(intervalId);
    }
    rootStyles.setProperty('--popup-bar-width', counterTime + '%');
  }, duration / 100);

  const timeoutId = setTimeout(() => {
    popupElement.classList.remove('popup--show');
    clearTimeout(timeoutId);
  }, duration);
};

buttonElement.addEventListener('click', () => {
  const message = 'Mensaje de prueba';
  if (popupElement.classList.contains('popup--show')) return;
  generatePopup(message, 4000);
});
