const seatsDiv = document.querySelector('.container');
const filmName = document.getElementById('film');
const totalPrice = document.getElementById('total');
const movieDrowdown = document.getElementById('movie');

let selectedSeatNum;

//selecting seats
seatsDiv.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    e.target.classList.toggle('newCustomer');
  }
});

//changes the sentence below the seats.
movieDrowdown.addEventListener('change', (e) => {
  let selectedDropdown = e.target.options[e.target.selectedIndex].innerText;
  filmName.innerText = selectedDropdown.slice(
    0,
    selectedDropdown.lastIndexOf('(')
  );
  totalPrice.innerText = e.target.value;
  console.log(totalPrice.innerText);
});
