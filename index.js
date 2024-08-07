import { TABLE } from './table.js'
// import { T } from './squares.js'

const $ = (el) => document.querySelector(el)

const table = $('.table')

let switchBlock = 0

function load () {
  let idCols = 0
  let idRows
  for (const row of TABLE) {
    if (idRows === undefined) idRows = 0
    else {
      idRows++
    }
    // eslint-disable-next-line no-unused-vars
    idCols = 0

    for (const cols of row) {
      const span = document.createElement('span')
      if (!span.getAttribute('id-rows')) span.setAttribute('idRows', idRows)
      span.classList.add('square')
      span.classList.add('second-bg-table')

      span.setAttribute('idCols', idCols)
      idCols++
      table.appendChild(span)
    }
  }
}

load()

function upload ({ rows, column }) {
  TABLE[rows][column] = '1'
  console.log(TABLE)

  for (const row of TABLE) {
    for (const cols of row) {

    }
  }
}

table.addEventListener('click', (el) => {
  const target = el.target
  const { idrows, idcols } = target.attributes
  if (!target.classList.contains('select-blue') && !target.classList.contains('select-sky-blue')) {
    if (switchBlock === 0) {
      target.classList.add('select-blue')
      switchBlock++
    } else {
      target.classList.add('select-sky-blue')
      switchBlock--
    }
  }
  upload({ column: Number(idcols.value), rows: Number(idrows.value) })
})
