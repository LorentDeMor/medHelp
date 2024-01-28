
// mass = [
// "У ребёнка чешутся высыпания или/и у него есть расчесы на коже?",
// "Выкиньте Вашего ребёнка",
// "У Вашего ребёнка есть покрасневшие участки кожи?",
// "Сыпь распространена в одной или нескольких следующих областях? На локтевых сгибах, на руках, на коленках, на лице",
// "У Вашего ребёнка несколько красных точек на ограниченных участках кожи?",
// "Сыпь занимает значительную поверхность тела?",
// "Вы заметили у ребёнка крохотные сероватые линии или воспаленные пятна на пальцах рук или на кистях?",
// "На коже Вашего ребёнка есть влажные, красные или покрытые чешуйками пятна?",
// ]

// switch (buttonId) {
//   case 'no0':
//     console.log('Clicked on Button 1');
//     lis.insertAdjacentHTML("beforeend", createListItem(mass[6].text, mass[6].chY, mass[6].chN))
//     break;
//   case 'yes0':
//     lis.insertAdjacentHTML("beforeend", createListItem(mass[1].text, mass[1].chY, mass[1].chN))
//     console.log('Clicked on Button 2');
//     break;
//   case 'yes1':
//     lis.insertAdjacentHTML("beforeend", createListItem(mass[2].text, mass[2].chY, mass[2].chN))
//     console.log('Clicked on Button 3');
//     break;
//   case 'no1':
//     lis.insertAdjacentHTML("beforeend", createListItem(mass[3].text, mass[3].chY, mass[3].chN))
//     console.log('Clicked on Button 3');
//     break;
//   case 'yes2':
//     lis.insertAdjacentHTML("beforeend", createListItem1("Детская экзема - ", bol))
//     console.log('Clicked on Button 3');
//     break;
//   case 'no2':
//     lis.insertAdjacentHTML("beforeend", createListItem1("Триховит или что похуже - ", bol))
//     console.log('Clicked on Button 3');
//     break;
//   case 'yes3':
//     lis.insertAdjacentHTML("beforeend", createListItem1("Укусы насекомых", bol))
//     console.log('Clicked on Button 3');
//     break;
//   case 'no3':
//     lis.insertAdjacentHTML("beforeend", createListItem(mass[4].text, mass[4].chY, mass[4].chN))
//     console.log('Clicked on Button 3');
//     break; 
//   case 'yes4':
//     lis.insertAdjacentHTML("beforeend", createListItem(mass[5].text, mass[5].chY, mass[5].chN))
//     console.log('Clicked on Button 3');
//     break;
//   case 'no4':
//     lis.insertAdjacentHTML("beforeend", createListItem1("Тут мы скорее всего перейдем на другую страницу - ", bol))
//     console.log('Clicked on Button 3');
//     break;
//   case 'yes5':
//     lis.insertAdjacentHTML("beforeend", createListItem1("Чесотка - ", bol))
//     console.log('Clicked on Button 3');
//     break;
//   case 'no5':
//     lis.insertAdjacentHTML("beforeend", createListItem1("тут скорее всего переход на другую страницу - ", bol))
//     console.log('Clicked on Button 3');
//     break;
//   case 'yes6':
//     lis.insertAdjacentHTML("beforeend", createListItem1("Триховит - ", bol))
//     otvet.innerHTML = createListItem1("Триховит, ебать его в сраку - ", bol)
//     console.log('Clicked on Button 3');
//     break;
//   case 'no6':
//     lis.insertAdjacentHTML("beforeend", createListItem1("другая страница... - ", bol))
//     console.log('Clicked on Button 3');
//     break;
//   }

var bol = "Какая-то болезнь, описание котрой нужно занести в переменную и передавать в функцию, если пользователь прожмёт именно такую каомбинацию среди кнопок да или нет. На данный момент это ещё не сделано. Нужно найти время, чтобы всё это перепечаттать с тех самых фото. Если вы первый раз это читаете, то бновите страницу и попробуйте понажимать другие комбинации, а это сообщение будет каждый раз выходить в роли описания болезни"

const lis = document.getElementById("list");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const otvet = document.getElementById("otvet");


mass = [
{
    text: "У ребёнка чешутся высыпания или/и у него есть расчесы на коже?",
    chY: "yes0",
    chN: "no0", 
    id: "0"   
},
{
    text: "У Вашего ребёнка есть покрасневшие участки кожи, покрытые чешуйками или пузырьками?",
    chY: "yes1",
    chN: "no1",
    id: "1"   
},
{
    text: "Сыпь распространена в одной или нескольких следующих областях? На локтевых сгибах, на руках, на коленках, на лице",
    chY: "yes2",
    chN: "no2",
    id: "2"   
},
{
    text: "У Вашего ребёнка несколько красных точек на ограниченных участках кожи?",
    chY: "yes3",
    chN: "no3",
    id: "3"   
},
{
    text: "Сыпь занимает значительную поверхность тела?",
    chY: "yes4",
    chN: "no4",
    id: "4"   
},
{
    text: "Вы заметили у ребёнка крохотные сероватые линии или воспаленные пятна на пальцах рук или на кистях?",
    chY: "yes5",
    chN: "no5",
    id: "5"   
},
{
    text: "На коже Вашего ребёнка есть влажные, красные или покрытые чешуйками пятна?",
    chY: "yes6",
    chN: "no6",
    id: "6"   
},
]
;

no.addEventListener("click", function() {
    console.log("Событие произошло!")
    lis.innerHTML = createListItem(mass[0].id, mass[0].text, mass[0].chY, mass[0].chN);
});


function createListItem(idIt, arg, idY, idN) {
    return `<li class="list-group-item d-flex justify-content-between align-items-center" id="${idIt}">
        ${arg}
         <span>
            <span><button class="btn btn-primary ml-auto doNo" id="${idY}">Да</button></span>
            <span><button class="btn btn-primary ml-auto doNo" id="${idN}">Нет</button></span>
        </span> 
    </li>`;
}

function createListItem1(arg1, arg2) {
  return `
  <p class =  "d-flex justify-content-between align-items-center">${arg1} ${arg2}</p>`
}

// Получаем родительский элемент, в котором содержатся все кнопки
var buttonsContainer = document.getElementById('mainDiv'); // Здесь можно выбрать более конкретный элемент

// Добавляем обработчик события для родительского элемента
buttonsContainer.addEventListener('click', function(event) {
  // Проверяем, было ли событие нажатия на элемент с классом 'myButton'
  if (event.target.classList.contains('doNo')) {
    // Получаем id нажатой кнопки
    var buttonId = event.target.id;

    // Выполняем действия в зависимости от id кнопки
    switch (buttonId) {
      case 'no0':
        lis.insertAdjacentHTML("beforeend", createListItem(mass[6].id, mass[6].text, mass[6].chY, mass[6].chN))
        break;
      case 'yes0':
        lis.insertAdjacentHTML("beforeend", createListItem(mass[1].id, mass[1].text, mass[1].chY, mass[1].chN))
        break;
      case 'yes1':
        lis.insertAdjacentHTML("beforeend", createListItem(mass[2].id, mass[2].text, mass[2].chY, mass[2].chN))
        break;;
      case 'no1':
        lis.insertAdjacentHTML("beforeend", createListItem(mass[3].id, mass[3].text, mass[3].chY, mass[3].chN))
        break;
      case 'yes2':
        otvet.innerHTML = createListItem1("Детская экзема - ", bol)
        break;
      case 'no2':
        otvet.innerHTML = createListItem1("Триховит или что похуже - ", bol)
        break;
      case 'yes3':
        otvet.innerHTML = createListItem1("Укусы насекомых", bol)
        break;
      case 'no3':
        lis.insertAdjacentHTML("beforeend", createListItem(mass[4].id, mass[4].text, mass[4].chY, mass[4].chN))
        break; 
      case 'yes4':
        lis.insertAdjacentHTML("beforeend", createListItem(mass[5].id, mass[5].text, mass[5].chY, mass[5].chN))
        break;
      case 'no4':
        otvet.innerHTML = createListItem1("Тут мы скорее всего перейдем на другую страницу - ", bol)
        break;
      case 'yes5':
        otvet.innerHTML = createListItem1("Чесотка - ", bol)
        break;
      case 'no5':
        otvet.innerHTML = createListItem1("тут скорее всего переход на другую страницу - ", bol)
        break;
      case 'yes6':
        otvet.innerHTML = createListItem1("Триховит - ", bol)
        break;
      case 'no6':
        otvet.innerHTML = createListItem1("другая страница... - ", bol)
        break;
      }
    }
  });



  



// const listItems = document.querySelectorAll('li.list-group-item')
// for (let i = 0; i < listItems.length; i++) {
//   if(listItems.textContent === mass[2].text) {
//     otvet.innerHTML = createListItem1("Ебаться в телевизор ", "вышло!")
//   }
// }



function resetFollowingItems(element) {
  let nextSibling = element.nextElementSibling;

  while (nextSibling) {
    lis.removeChild(nextSibling);
    nextSibling = element.nextElementSibling;
  }
}

lis.addEventListener('click', function (event) {
  const target = event.target;

  if (target.classList.contains('btn-primary') || target.classList.contains('btn-primary')) {
    const listItem = target.closest('li');

    if (listItem) {
      const id = listItem.id;
      resetFollowingItems(listItem);
    }
  }
});
