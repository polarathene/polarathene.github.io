//
// The original three methods with toggle bug present
//

// on right-click:
function makeGreen(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// on left-click:
function makeBlue(event) {
  event.target.classList.toggle('blue')
  updateCounts()
}

// on double-click:
function hide(event) {
  event.target.classList.toggle('invisible')
  updateCounts()
}


//
// The "elegant" solution
//


function createToggleFunctionFor(classToToggle) {
  // Create this value in advance so it can be re-used many
  // times by the closure without needing to create it every call:
  const filtered = ['green', 'blue', 'invisible'].filter(
    (value) => value !== classToToggle
  )

  // The closure function (in arrow function syntax) to return:
  return (event) => {
    // This line is only necessary for `contextmenu` listener:
    event.preventDefault()

    event.target.classList.toggle(classToToggle)
    filtered.forEach((x) => event.target.classList.remove(x))

    updateCounts()
  }
}

// Generate the listener functions:
const makeGreen = createToggleFunctionFor('green')
const makeBlue  = createToggleFunctionFor('blue')
const hide      = createToggleFunctionFor('invisible')


//
// An earlier attempt
//

function handleClick(event) {
  let classToToggle

  switch (event.type) {
    case 'contextmenu': classToToggle = 'green';     break;
    case 'click':       classToToggle = 'blue';      break;
    case 'dblclick':    classToToggle = 'invisible'; break;
  }

  // This line is only necessary for `contextmenu` listener:
  event.preventDefault()

  // Remove the other classes if they're present:
  const isOurToggleClass = (x) => x === classToToggle
  event.target.classList.forEach(c => {
    isOurToggleClass(c)
      ? event.target.classList.toggle(c) // true
      : event.target.classList.remove(c) // false
  })

  updateCounts()
}

// In the loop, now use a single function for all Event types:
dots[i].addEventListener('contextmenu', handleClick)
dots[i].addEventListener('click',       handleClick)
dots[i].addEventListener('dblclick',    handleClick)
