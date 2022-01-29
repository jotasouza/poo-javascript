//DEFINIÇÃO DA CLASSE E DAS FUNÇÕES
class Product{
    //FUNÇÃO CONSTRUTORA
    constructor(){
        this.id = 0;
        this.name = '';
        this.price = 0
        this.description = ''
        this.image = ''
    }

    //FUNÇÃO QUE ADICIONA UM PRODUTO NA LISTA
    addProduct(){
        alert('Chamei a função Adiciona')
    }

    //FUNÇÃO QUE EDITA UM PRODUTO DA LISTA
    editProduct(){
        alert('Chamei a função Edita')
    }

    //FUNÇÃO QUE REMOVE UM PRODUTO DA LISTA
    removeProduct(){
        alert('Chamei a função Deleta')
    }

    //FUNÇÃO QUE SALVA UM PRODUTO NA LISTA
    saveProduct(){
        alert('Chamei a função Salva')
    }
}

const product = new Product() 