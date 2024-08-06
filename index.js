const $ = (el) => document.querySelector(el)

const table = $('.table')

let switchBlock = 0

table.addEventListener('click', (square) => {
  const target = square.target

  console.log(target, square)

  if (!target.classList.contains('select-blue') && !target.classList.contains('select-sky-blue')) {
    if (switchBlock === 0) {
      target.classList.add('select-blue')
      switchBlock++
    } else {
      target.classList.add('select-sky-blue')
      switchBlock--
    }
  }
})
