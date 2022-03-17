// hamburger toggle

const toggleButton = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  });

function closeMenu(){
  navbarLinks.classList.toggle('active');
}





// Smoothie Generator

let menuItems = ['Spinach Special', 'Banana Bomber', 'The Appalachian', 'Avocado Action', 'Columbia Gold', 'Big Blue Madness', 'Strawberry Smash', 'Mixed Berry Banaza', 'Mango Madness', 'Mint Cucumber'];

const smoothieBtn = document.getElementById('smoothie-btn');
const showSmoothie = document.getElementById('show-selection')

// function pickSmoothie(){
//   let selection = Math.floor(Math.random() * menuItems.length);
//   const showSmoothie = document.getElementById('show-selection')
//   showSmoothie.innerText = 'Try \'' + menuItems[selection] + '\' you\'ll love it!';
// }

smoothieBtn.addEventListener('click', () =>{
  let selection = Math.floor(Math.random() * menuItems.length);
  showSmoothie.innerText = `Try '${menuItems[selection]}' you'll love it!`;
});




// submit button success

const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitBtn.innerText = 'Submitted!';
});






  

