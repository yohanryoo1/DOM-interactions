// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue) 
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

function makeBlue (e) {
  e.target.classList.toggle('blue')
  updateCounts()
}

function hide (e) {
  // removes blue or green class if dot is hidden
  e.target.classList.remove('blue')
  e.target.classList.remove('green')

  e.target.classList.toggle('invisible')
  updateCounts()
}

function updateCounts () {
  const blueDots = document.getElementsByClassName('blue')
  const greenDots = document.getElementsByClassName('green')
  const invisibleDots = document.getElementsByClassName('invisible')
  
  var totals = {
    blue: blueDots.length,
    green: greenDots.length,
    invisible: invisibleDots.length
  }
  
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
