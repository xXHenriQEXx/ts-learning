import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController{

private inputData: HTMLInputElement;
private inputQuantidade: HTMLInputElement;
private inputInputValor: HTMLInputElement;
private  negociacoes = new Negociacoes();

constructor(){
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputInputValor = document.querySelector('#valor');
   
}

adiciona(): void{

    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista())
    this.limparFormulario();


}

criaNegociacao(): Negociacao{
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','))
    const quantidade = parseInt(this.inputQuantidade.value)
    const valor = parseFloat (this.inputInputValor.value)
    return new Negociacao(date, quantidade, valor);
}

limparFormulario(): void{

    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputInputValor.value = '';
    this.inputData.focus();

}

};