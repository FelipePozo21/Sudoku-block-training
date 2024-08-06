import { TABLE } from './table.js'

console.log(TABLE)

const $ = (el) => document.querySelectorAll(el)

const table = $('.table')

const div = $('.div-square')

let switchBlock = 0

// table[0].addEventListener('click', (square) => {
//   const target = square.target
//   if (!target.classList.contains('select-blue') && !target.classList.contains('select-sky-blue')) {
//     if (switchBlock === 0) {
//       target.classList.add('select-blue')
//       switchBlock++
//     } else {
//       target.classList.add('select-sky-blue')
//       switchBlock--
//     }
//   }
//   test(target)
// })

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
      console.log(`${div}: ${index}`)
      console.log(`${span}: ${spanIndex}`)
    })
  })
})

/**
   * (square) => {
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
//   testFor(target)
})
   */

function test (el) {
  const divsArr = Array.from(div)
  for (const divs of divsArr) {
    const index = divsArr.indexOf(divs)
    if (index === 2) console.log(index)
  }
}

// function testFor (target) {
//   div.forEach(el => {
//     for (const square of el.children) {
//       if (square === target) {
//         console.log(div)
//       }
//     }
//   })
// }
