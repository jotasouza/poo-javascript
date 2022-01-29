//PEGA O ELEMENTO HTML
const saveProduct = document.getElementById('buttonSave')
//ATRIBUI UMA AÇÃO AO BOTÃO, CHAMANDO A FUNÇÃO DA CLASSE
saveProduct.addEventListener('click', product.saveProduct)

const cancelProduct = document.getElementById('buttonCancel')
cancelProduct.addEventListener('click', product.cancelAddProduct)

//const editProduct = document.getElementById('buttonEdit')
//editProduct.addEventListener('click', product.editProduct)

//PEGA O VALOR DOS INPUTS
const productName = document.getElementById('nomeProduto').value
const descriptionProduct = document.getElementById('descricao').value
const priceProduct = document.getElementById('valor').value