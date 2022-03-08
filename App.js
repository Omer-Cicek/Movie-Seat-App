const seatsDiv = document.querySelector('.container');
const filmName = document.getElementById('film');
const totalPrice = document.getElementById('total');
const countSeat = document.getElementById('count');
const movieDrowdown = document.getElementById('movie');

let selectedSeatNum = 0;
let filmPrice = 10;
let totalMoney = 0;

//Function that store data at LocalStorage
localStorageFunction = () => {
  localStorage.setItem('totalMoney', Number(totalMoney));
  localStorage.setItem('filmPrice', Number(filmPrice));
  localStorage.setItem('selectedSeatNum', Number(selectedSeatNum));
};

console.log(localStorage.getItem('totalMoney'));

//selecting seats
seatsDiv.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    e.target.classList.toggle('newCustomer');
    if (e.target.classList.contains('selected')) selectedSeatNum += 1;
    if (!e.target.classList.contains('selected')) selectedSeatNum -= 1;
  }
  countSeat.innerText = selectedSeatNum;
  totalMoney = filmPrice * selectedSeatNum;
  totalPrice.innerText = totalMoney;
  localStorageFunction();
});

//changes the sentence below the seats.
movieDrowdown.addEventListener('change', (e) => {
  let selectedDropdown = e.target.options[e.target.selectedIndex].innerText;
  filmName.innerText = selectedDropdown.slice(
    0,
    selectedDropdown.lastIndexOf('(')
  );
  filmPrice = e.target.value;
  totalMoney = filmPrice * selectedSeatNum;
  totalPrice.innerText = totalMoney;
  localStorageFunction();
});
