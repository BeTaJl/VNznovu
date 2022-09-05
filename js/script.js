//              показ пароля

let showPassword = document.querySelectorAll('.show-password_btn');

showPassword.forEach(item =>
    item.addEventListener('click', toggleType)
);

function toggleType() {
  
    let input = this.closest('.seeDontsee').querySelector('.show-password');
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

//          проба забрати палку з ока )
let showEye = document.querySelectorAll('#submit');

showEye.forEach(item =>
  item.addEventListener('click', () => {
    showEye.classList.toggle('active_btn');
  })
);



//          очищення полів вводу
let btnClear = document.querySelectorAll('.popup_close')

btnClear.addEventListener('click',() => {
  document.querySelectorAll('input').value = '';
})





//                  перевірка на схожість паролю
// let pass1 = document.querySelectorAll('.inPassword').value
// let pass2 = document.querySelectorAll('.inRepeatPassword').value

function Check() {
  let pass1 = document.querySelectorAll('.inPassword').value
  let pass2 = document.querySelectorAll('.inRepeatPassword').value

  if(pass1 === pass2)
    alert("Ви успішно зареєстровіні!");
  else
    alert("Ваші паролі різняться!")
}


//               считування введених даних
document.querySelector('.inSubmit').onclick = function (event) {
  event.preventDefault();
  console.log('work');

  let login = document.querySelectorAll('.inLogin').value;
  let password = document.querySelectora('.inPassword').value;

  let data = {
    "login": login,
    "password": password,
  }
  console.log(data);
}

