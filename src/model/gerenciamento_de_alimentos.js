
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sProduto = document.querySelector('#m-produto')

const sQuantidade = document.querySelector('#m-quantidade')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

 function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sProduto.value = itens[index].produto
    // sFuncao.value = itens[index].funcao
    sQuantidade.value = itens[index].quantidade
    id = index
  } else {
    sProduto.value = ''
    // sFuncao.value = ''
    sQuantidade.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td class=" bg-white pl-4 text-left font-semibold border border-gray-500 w-[38rem] m-auto ">${item.produto}</td>
   
    <td class=" bg-white m-2 p-2 text-center font-semibold border  border-gray-500 w-[4rem] gap-3">${item.quantidade}</td>
    <td class="acao bg-blue-500 m-2 p-2  font-semibold text-white text-center w-[4rem] hover:bg-blue-400  ">
      <button onclick="editItem(${index})"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
    </svg>
    <i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao bg-red-600 m-2 p-2 text-center font-semibold w-[4rem] text-white hover:bg-red-500 ">
      <button onclick="deleteItem(${index})"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" clip-rule="evenodd" />
    </svg>
    <i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sProduto.value == '' ||  sQuantidade.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].produto = sProduto.value
    itens[id].quantidade = sQuantidade.value
  } else {
    itens.push({'produto': sProduto.value, 'quantidade': sQuantidade.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('alimentos')) ?? []
const setItensBD = () => localStorage.setItem('alimentos', JSON.stringify(itens))

loadItens()


