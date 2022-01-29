//DEFINIÇÃO DA CLASSE E DAS FUNÇÕES
class Product{
    //FUNÇÃO CONSTRUTORA
    constructor(){
        this.id = 0;
        this.name = name;
        this.description = description;
        this.price = price; 
    }

    //FUNÇÕES GETTERS
    get cleanData(){
       return this.readData()
    }

     //FUNÇÃO RESPONSÁVEL POR LER OS DADOS INSERIDOS NO FORM
    get readData(){
        let product = {}

        product.id = this.id
        product.nameProduct = productName
        product.descriptionProduct = descriptionProduct
        product.priceProduct = priceProduct

        return product
     }

    //---------- FUNÇÕES SETTERS -----------

     //FUNÇÃO QUE SALVA UM PRODUTO NA LISTA
    saveProduct(){
        let produto = this.readData
     }

    //FUNÇÃO QUE EDITA UM PRODUTO DA LISTA
    editProduct(){
        alert('Chamei a função Edita')
    }

    //FUNÇÃO QUE REMOVE UM PRODUTO DA LISTA
    removeProduct(){
        alert('Chamei a função Deleta')
    }

    //FUNÇÃO QUE LIMPA OS CAMPOS DO FORM
    cancelAddProduct(){
        console.log(product.cleanData)
    }
    
    //FUNÇÃO RESPONSÁVEL POR FAZER O UPLOAD DA IMAGEM DO PRODUTO
    uploadImageProduct(){

    }

}

const product = new Product(0, 'Camiseta', 'Camiseta 100% algodão', 19.99) 

