let contador = 0;
let array = [];
var opiniaoSelecionada;

function reloadPage() {
  location.reload();
}

function onClick() {
  var opcoes = document.getElementsByName('opiniao');
  for (var i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
      opiniaoSelecionada = opcoes[i].value;
    }
  }
  let idade = document.getElementById("idade").value;
  let genero = document.getElementById("genero").value;

  if (idade == "") {
    alert("Por favor, preencha a idade corretamente para prosseguir!");
  }
  else if (opiniaoSelecionada == "") {
    alert("Por favor, escolha uma opinião para prosseguir!");
  }
  else {

    let respostas = {
      idade: parseInt(idade),
      genero: genero,
      opiniao: parseInt(opiniaoSelecionada)
    };
    array.push(respostas);

    contador += 1;
    document.getElementById("envioResposta").textContent = "[" + contador + "] Obrigada pela a opinião 🥰"

    if (contador === 45) {
      results();
      document.querySelector('.resultadoPesquisa').style.display = 'block';
      document.querySelector('.inputs').style.display = 'none';
    }
  }

  function results() {
    media();
    idadeMaior();
    idadeMenor();
    respPessimo();
    porcentual();
    respGenero();
  }

  function media() {
    let somaIdade = 0;
    array.map((e) => {
      somaIdade += e.idade;
    })
    let media = somaIdade / array.length;
    document.getElementById("mediaIdade").textContent = media
  }

  function idadeMaior() {
    let idadeVelha = array.map((e) => e.idade).sort()[array.length - 1]
    document.getElementById("idadeVelha").textContent = idadeVelha
  }

  function idadeMenor() {
    let idadeNova = array.map((e) => e.idade).sort()[0]
    document.getElementById("idadeNova").textContent = idadeNova
  }

  function respPessimo() {
    let respostasPessimas = 0;
    array.forEach((e) => {
      if (e.opiniao == 1) {
        respostasPessimas += 1;
      }
    });
    document.getElementById("respostasPessimas").textContent = respostasPessimas;
  }

  function porcentual() {
    let respostasOtimas = 0;

    array.forEach(e => {
      if (e.opiniao == 3 || e.opiniao == 4) {
        respostasOtimas += 1;
      }
    });
    let percentidade = (respostasOtimas * 100) / array.length;
    document.getElementById("respostasOtimas").textContent = percentidade.toFixed(2) + "%";
  }

  function respGenero() {
    let mulheres = 0, homens = 0;
    array.forEach((e) => {
      if (e.genero == 1) {
        mulheres += 1;
      }
      else{
        homens += 1;
      }
    });
    document.getElementById("qtdeMulheres").textContent = mulheres;
    document.getElementById("qtdeHomens").textContent = homens;
  }
}