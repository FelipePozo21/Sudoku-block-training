import { BLOCKS } from './squares.js'
import { TABLE } from './table.js'

const $ = (el) => document.querySelectorAll(el)

const table = $('.table')

const preview = $('.preview-block')

let targetBlockSelect

let switchBlock = 0

let blocksToInsert

function load () {
  let idCols
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

  const verifyRowComplete = TABLE[rows].every(item => item === '1')
  if (verifyRowComplete) {
    return removeRow(rows.toString())
  }
  return TABLE
}

table[0].addEventListener('mousedown', (el) => {
  const target = el.target
  const { idrows, idcols } = target?.attributes
  targetBlockSelect = { rows: Number(idrows?.value), cols: Number(idcols?.value) }
  upload({ column: Number(idcols?.value), rows: Number(idrows?.value) })
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

function squares () {
  BLOCKS.forEach(item => {
    const div = document.createElement('div')
    div.addEventListener('click', () => selectedBlock(item))
    div.classList.add('preview-grid')
    for (const squares of item) {
      for (const square of squares) {
        const span = document.createElement('span')
        span.style.outline = 'none'
        span.classList.add('square')
        if (square === 1) {
          span.classList.add('select-blue')
        }
        div.appendChild(span)
      }
      preview[0].appendChild(div)
    }
  })
}
squares()

function selectedBlock (square) {
  blocksToInsert = square
  // let { rows, cols } = targetBlockSelect ?? ''
  // for (const arr of blocksToInsert) {
  //   for (const block of arr) {
  //     console.log({ block })
  //     if (arr[0] && block[0]) {
  //       TABLE[rows][cols] = '1'
  //     }
  //     if (block === '1') {
  //       TABLE[rows][cols + 1] = '1'
  //       cols++
  //     }
  //     const test = TABLE[rows][cols + 1] ?? 's'
  //     console.log(test)
  //   }
  // }
  console.log(blocksToInsert)
}
