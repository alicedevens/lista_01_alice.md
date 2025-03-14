class Produto { 
    //criando a primeira classe e aplicando o desconto inicial
    constructor(nome, preco) {
        this.nome = nome; 
        this.preco = preco;
            
        }
        calcularDesconto() {
            return this.preco - this.preco*0.1
        }
    }
class Livro extends Produto {
    constructor(nome, preco, categoria) {
        super(nome, preco); //o super é utilizado para chamar o constructor da classe do Produto
        this.categoria = categoria;

    }
    calcularDesconto() {
        return this.preco - this.preco*0.2
    }
}
//testando se o código funcionou
let produto1 = new Livro("Algebra", 200);
console.log(produto1.calcularDesconto())
