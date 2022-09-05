const popupLinks = document.querySelectorAll('.popup-link');
// const bodyAll = document.querySelectorAll('body');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#','');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      document.querySelectorAll('input').value = ''
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup_content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}
// const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
function bodyLock() {
  // const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  // const lockPaddingValue = '17px'

  // bodyAll.style.paddingRight = lockPaddingValue;
  // bodyAll.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  },  timeout);
}

function bodyUnLock () {
  // setTimeout(function () {
  //
  //   bodyAll.style.paddingRight = '0px';
  //   bodyAll.classList.remove('lock');
  //
  // },
  //   timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  },  timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
