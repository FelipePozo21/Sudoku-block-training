import { TABLE } from './table.js'
// import { T } from './squares.js'

const $ = (el) => document.querySelectorAll(el)

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
    idCols = 0

    // eslint-disable-next-line no-unused-vars
    for (const cols of row) {
      const span = document.createElement('span')
      if (!span.getAttribute('id-rows')) span.setAttribute('idRows', idRows)
      span.classList.add('square')
      span.classList.add('second-bg-table')

      span.setAttribute('idCols', idCols)
      idCols++
      table[0].appendChild(span)
    }
  }
}

load()

function upload ({ rows, column }) {
  TABLE[rows][column] = '1'

  const test = TABLE[rows].every(item => item === '1')
  console.log({ test, TABLE })
  if (test) {
    return removeRow(rows.toString())
  }
  return TABLE
  // for (const row of TABLE) {
  //   const someRow = row.every(el => el === '1')
  //   if (someRow) {
  //     removeRow(rows.toString())
  //   }
  // }
}

table[0].addEventListener('click', (el) => {
  const target = el.target
  const { idrows, idcols } = target.attributes

  upload({ column: Number(idcols.value), rows: Number(idrows.value) })
  if (TABLE[Number(idrows.value)][Number(idcols.value)] === '1') {
    if (!target.classList.contains('select-blue') && !target.classList.contains('select-sky-blue')) {
      if (switchBlock === 0) {
        target.classList.add('select-blue')
        switchBlock++
      } else {
        target.classList.add('select-sky-blue')
        switchBlock--
      }
    }
  }
  return table
})

function removeRow (index) {
  TABLE[index] = ['0', '0', '0', '0', '0', '0', '0', '0', '0']
  const row = document.querySelectorAll(`span[idrows="${index}"]`)
  row.forEach(span => {
    if (span.classList.contains('select-blue')) {
      span.classList.remove('select-blue')
    } else {
      span.classList.remove('select-sky-blue')
    }
  })
}
