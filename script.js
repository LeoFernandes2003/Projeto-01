/*
      Esta é uma pratica para saber quantos anos uma pessoa tem.


        let diaNascimento = prompt("Digite o dia do nascimento (DD): ");
        let mesNascimento = prompt("Digite o mês do nascimento (MM): ");
        let anoNascimento = prompt("Digite o ano do nascimento (AAAA): ");

        while (isNaN(diaNascimento) || isNaN(mesNascimento) || isNaN(anoNascimento)) {
          alert("Erro! Você deve digitar apenas números.");
          diaNascimento = prompt("Digite o dia do nascimento (DD): ");
          mesNascimento = prompt("Digite o mês do nascimento (MM): ");
          anoNascimento = prompt("Digite o ano do nascimento (AAAA): ");
        }

        while (diaNascimento < 1 || diaNascimento > 31 || mesNascimento < 1 || mesNascimento > 12 || anoNascimento < 1900 || anoNascimento > 2022) {
          alert("Erro! Data de nascimento inválida.");
          diaNascimento = prompt("Digite o dia do nascimento (DD): ");
          mesNascimento = prompt("Digite o mês do nascimento (MM): ");
          anoNascimento = prompt("Digite o ano do nascimento (AAAA): ");
        }

        let dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento);
        let dataAtual = new Date();
        let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

        if (dataAtual.getMonth() < dataNascimento.getMonth() || (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
          idade--;
        }

        if (idade < 6 || idade > 140) {
          alert("Erro! Idade inválida.");
        } else {
          alert(`A pessoa tem ${idade} anos.`);
        }
          */

        


          /*
        var anoNascimento = prompt("Digite o ano de nascimento: ");

      while(anoNascimento >= 2019){
        alert("Erro! Ano inválido.");
        anoNascimento = prompt("Digite o ano de nascimento: ");
      }

      var anoAtual = prompt("Digite o ano atual: ");
      var idadeFinal = anoAtual - anoNascimento;
      alert("A pessoa tem " + idadeFinal + " anos.");

      */

      /*

      let numeroInicial = prompt("Digite o primeiro número: ");
      let sinal = prompt("Digite o sinal (+ ou - ou * ou /): ");

      while (sinal != "+" && sinal != "-" && sinal != "*" && sinal != "/") {
          alert("Erro! Sinal inválido.");
          sinal = prompt("Digite o sinal (+ ou - ou * ou /): ");
      }

      let numerofinal = prompt("Digite o segundo número: ");

      let resultadoFinal = 0;

      if (sinal == '+') {
          resultadoFinal = parseFloat(numeroInicial) + parseFloat(numerofinal);
      } else if (sinal == '-') {
          resultadoFinal = parseFloat(numeroInicial) - parseFloat(numerofinal);
      } else if (sinal == '*') {
          resultadoFinal = parseFloat(numeroInicial) * parseFloat(numerofinal);
      } else if (sinal == '/') {
          resultadoFinal = parseFloat(numeroInicial) / parseFloat(numerofinal);
      }

      alert("O resultado final é: " + resultadoFinal);
      */
    


/* Isso são objetos no JavaScript e objetos dentro de arrays.
        var pessoa = [{
            nome : "Leonardo",
            idade: 21,
            profissao: "Programador"
        },{
          nome : "Maria",
          idade: 18,
          profissao: "Programadora"
        }];

        var noticia =[{
          titulo: "Noticia 1",
          texto: "Texto da noticia 1",
          autor: "Autor da noticia 1",
          imagem: "Imagem da noticia 1"
        },{
          titulo: "Noticia 2",
          texto: "Texto da noticia 2",
          autor: "Autor da noticia 2",
          imagem: "Imagem da noticia 2"
        }]

        alert(noticia[1].imagem)

        */

        

        /*
        Treinamento top sobre orientação a objetos.

        var promprNome = "";
        var promptIdade = "";
        var promptProfissao = "";

        while (true) {
            promprNome = prompt("digite seu nome");
            promptIdade = prompt("digite sua idade");
            promptProfissao = prompt("digite sua profissão");

            if (/^[a-zA-Z]+$/.test(promprNome) && /^[a-zA-Z]+$/.test(promptProfissao) && /^\d+$/.test(promptIdade)) {
                break;
            } else {
                alert("Erro: Verifique os dados inseridos");
            }
        }

        function Pessoa(){
            this.nome = promprNome,
            this.idade = promptIdade,
            this.profissao = promptProfissao,
            this.falar = function(){
                document.getElementById("cronometro").innerHTML =("Ola, eu sou o "+this.nome+ " e tenho "+this.idade+" anos e sou "+this.profissao);
            }
        }

        var pessoa = new Pessoa();

        pessoa.falar();

        */


        /*
        
        Apenas praticando orientação a objetos.


        function Animal(nome, peso){
          if(nome == "undefined"){
            nome = 'cachorro'
        }
      

        if(peso == "undefined"){
          peso = 10;
        }
        
        this.nome = nome;
        this.peso = peso;
      }
        

        Animal = new Animal('gato', 5);

        alert(Animal.nome);
        */

        /*
        Orientação a objetos utilizando classes e constructors.

        class Animal {
          constructor(nome){
            this.nome = nome
          }
          printNome(){
            return this.nome;
          }

        }

        class Cachorro extends Animal {
          constructor(nome){
            super(nome);
            this.raca = "Labrador";
          }

          printRaca(){
            return this.raca
          }
        }


        cachorro = new Cachorro();


        alert(cachorro.printRaca());
        */

        /* manipulando datas*/

        /*

        var data = new Date('10/5/2019');
        var data2 = new Date('10/10/2019');

        var diferenca = (data2.getTime() - data.getTime()) / (1000 * 3600 * 24);

        alert(diferenca)

        */

        /*

        function atualizarRelogio() {
            var data = new Date();
            var relogio = document.getElementById("relogio");
            relogio.innerHTML = data.toLocaleTimeString();
        }

        // Atualiza o relógio a cada segundo
        setInterval(atualizarRelogio, 1000);

        */


        /*
        mechendo no Html com javascript.


        let h2 = document.getElementsByTagName("h2");
        for(let i = 0; i < h2.length; i++){
            h2[0].innerHTML = h2[0].innerHTML + " " + i;
        }
            */

        /*mechendo no css através do id com javascript.


        let el = document.getElementById("cronometro");
        el.style.color = "red";
        el.style.width = "200px";
        el.style.height = "200px";
        el.style.backgroundColor = "blue";

        */

        //mechendo no css através do class com javascript.
        /*
        let els = document.querySelectorAll(".testes");
          els[0].innerHTML = '<div class="inside-testes2">Olá mundo<div>';
          */

          /*Uma pequena animação com javascript
          var el = document.querySelector(".box");
          el.addEventListener("click", ()=>{
            el.classList.add("animation");
          })
            */

    //aqui é o codigo para mostrar e ocultar os textos com o botão.
          var spans = document.querySelectorAll(".conteudo span")

          spans.forEach((func) => {
          func.addEventListener("click", () => {
            let conteudo = func.closest(".conteudo").querySelector("p")

            if(conteudo.classList.contains("mostrar")){

              conteudo.classList.remove("mostrar")
              func.innerHTML = "Veja mais!"
              func.style.color = "white";
            }else{
              conteudo.classList.add("mostrar")
              func.innerHTML = "Veja menos!"
              func.style.color = "cyan";
      }
    })
  })


  //Aqui é o codigo do Salider para trocar as imagens com o botão.
  var UltimoIndex = 0;
  var imagens = document.querySelectorAll(".imagem img");

  imagens.forEach((item, index)=>{
    document.querySelectorAll('.botao-single')[index]
    .addEventListener("click",()=>{
      let ultimaImagem = document.querySelectorAll(".imagem img")[UltimoIndex]
      let imagemAtual = document.querySelectorAll(".imagem img")[index] 

      document.querySelectorAll(".botao-single")[UltimoIndex]
      .classList.remove("active-botao");
      document.querySelectorAll(".botao-single")[index]
      .classList.add("active-botao");

      ultimaImagem.style.opacity = 0;
      imagemAtual.style.opacity = 1;


      UltimoIndex = index;
    })
  })
        

  /*
  Bloke Scope Teste
  {
    let nome3 = "yago";
    let operacao = function(){
      console.log("Ola " + nome3);
    }
    operacao();
  }
  
  */

  

/*Praticando Destructure

const arr = ['leonardo', 'joana', 'lorena', 'zeca'];
const [a,b,...c] = arr

alert(c[1])
*/

/*
function testes(...numero){
  console.log(numero[0][0]);
}

testes([1,2,3,4,5,6])

*/

/*
Praticando promises.

function teste(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const erro = false;
    if(erro){
      reject("erro...")
    }else{
      resolve("deu certo")
    }
    },5000)
    
  })
}

async function teste2(){
  await teste().then(function(res){
    alert(res);
  })
  alert("Olá")
}

teste2();

*/

