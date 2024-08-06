import { TABLE } from './table.js'

console.log(TABLE)

const $ = (el) => document.querySelectorAll(el)

const table = $('.table')

const div = $('.div-square')

let switchBlock = 0

div.forEach((divs, index) => {
  const span = divs.querySelectorAll('.square')

  span.forEach((span, spanIndex) => {
    span.addEventListener('click', (square) => {
      const target = square.target
      if (!target.classList.contains('select-blue') && !target.classList.contains('select-sky-blue')) {
        if (switchBlock === 0) {
          target.classList.add('select-blue')
          switchBlock++
        } else {
          target.classList.add('select-sky-blue')
          switchBlock--
        }
      }
      changeArray(index, spanIndex)
    })
  })
})

function changeArray (index, spanIndex) {
  TABLE[index][spanIndex] = '1'
  console.table(TABLE)
}
