//PEGA O ELEMENTO HTML
const addProduct = document.getElementById('buttonAdd')
//ATRIBUI UMA AÇÃO AO BOTÃO, CHAMANDO A FUNÇÃO DA CLASSE
addProduct.addEventListener('click', product.addProduct)

const editProduct = document.getElementById('buttonEdit')
editProduct.addEventListener('click', product.editProduct)

const deleteProduct = document.getElementById('buttonDelete')
deleteProduct.addEventListener('click', product.removeProduct)

const saveProduct = document.getElementById('buttonSave')
saveProduct.addEventListener('click', product.saveProduct)