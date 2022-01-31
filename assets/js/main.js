//VARIAVEL PRODUTO TEMPORÁRIA
const tempProduct = {
    name: 'Camiseta Next White',
    description: 'Componha o seu look casual perfeito com esta camiseta Next White. Produto 100% algodão.',
    price: 29.90,
    category: 'Camisetas',
    image: './assets/img/camiseta-next-white.png'
}

//FUNCTION GET
//Esta função vai até o local storage e retorna com os dados (string) convertendo para
//o formato JSON. Caso o local storage esteja vazio, a função retorna um array vazio.
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_product')) ?? []

//FUNCTION SET
//Esta função pega os dados informados, converte para string(local storage só armazena dados
//no formato string) e salva no local storage.
const setLocalStorage = (dbProduct) => localStorage.setItem('db_product', JSON.stringify(dbProduct))

// ============================== FUNÇÕES CRUD ============================= //

//FUNÇÃO CREATE
const createProduct = (product) => {
    const dbProduct = getLocalStorage()
    dbProduct.push(product)
    setLocalStorage(dbProduct)
    readProduct()
}

//FUNÇÃO READ
const readProduct = () => {
   const read = getLocalStorage()
   console.log(read)
}

//FUNÇÃO UPDATE
const updateProduct = () => {

}

//FUNÇÃO DELETE
const deleteProduct = () => {

}