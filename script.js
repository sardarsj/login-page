const wrapper = document.querySelector('.wrapper'),
loginLink = document.querySelector('.login-link'),
btnPopup = document.querySelector('.btnLogin-popup'),
iconClose = document.querySelector('.icon-close'),
registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
}); 

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');

});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');

});
 //this code doesn't cleans up the previous data which was entered before .... it should be cleared everytime
 //do it using query selector ... and then putting (inputtag.value = "")