//dropdown menu


const myDropdown = document.getElementById('submenu')
myDropdown.addEventListener('mouseover',onClick)

function onClick() {
  document.getElementById('myDropdown').classList.add('show');
}

// Close the dropdown if the user clicks outside of it
window.onClick = function(event) {
  if (!event.target.matches('submenu')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    const i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.add('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const form = document.getElementById('myform')
form.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault('true')
}

navigator.geolocation.getCurrentPosition(onSuccessLocation, onErrorLocation)

function onSuccessLocation(position) {
  console.log(position)
}

function onErrorLocation(err) {
  console.log(err)
}
