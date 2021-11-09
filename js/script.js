// HUGO

// Pego os valores em string e converto em número
var saldoAtual = Number(document.getElementById("saldoAtual").innerText)

// Função em que cada botão realiza o cálculo individualmente com o valor da carteira
// se o valor da carteira estiver menor que o valor do crédito , chamo a função em que a modal avisa que os créditos são insuficientes
document.getElementById("nomeUsuario").innerHTML = localStorage.getItem("usuario")
function botaoDisponivel() {
  saldoAtual += - 20;
  document.getElementById("saldoAtual").innerHTML = saldoAtual;
  if (saldoAtual <= 20) {

    acabou()


  }
  if (saldoAtual <= 20) {

    let btn2 = document.getElementById("btn2").disabled = true;


  }

  if (saldoAtual <= 20) {
    let btn3 = document.getElementById("btn3").disabled = true;


  }

  if (saldoAtual <= 20) {
    let btn5 = document.getElementById("btn5").disabled = true;


  }

  if (saldoAtual <= 20) {
    let btn6 = document.getElementById("btn6").disabled = true;


  }



}

// ************* FIM DA FUNÇÃO




// Função em que apenas libero o uso do botão se a checkbox sobre os termos de uso estiver marcadas
$('#checar').click(function () {
  if ($('[id="checar"]').is(':checked')) {
    console.log("checado")
    document.getElementById("btn2").disabled = false;

  }
  else {
    console.log("Não checado")
    document.getElementById("btn2").disabled = true;

  }
})


$('#checar3').click(function () {
  if ($('[id="checar3"]').is(':checked')) {
    console.log("checado")
    document.getElementById("btn3").disabled = false;



  }
  else {
    console.log("Não checado")
    document.getElementById("btn3").disabled = true;

  }
})

$('#checar5').click(function () {
  if ($('[id="checar5"]').is(':checked')) {
    console.log("checado")
    document.getElementById("btn5").disabled = false;



  }
  else {
    console.log("Não checado")
    document.getElementById("btn5").disabled = true;

  }
})



$('#checar6').click(function () {
  if ($('[id="checar6"]').is(':checked')) {
    console.log("checado")
    document.getElementById("btn6").disabled = false;



  }
  else {
    console.log("Não checado")
    document.getElementById("btn6").disabled = true;

  }
})




// Modal em que chamo após clicar no botão para adicionar o benefício , se aceitar , debito na carteira
function mostrarModal() {

 
  let modal = document.getElementById("minhaModal");
  
  let minhaModal = new bootstrap.Modal(modal);
  minhaModal.show();




}


// Modal em que chamo após os créditos na carteira acabar
function acabou() {


  let modal2 = document.getElementById("minhaModal2");

  let minhaModal2 = new bootstrap.Modal(modal2);
  minhaModal2.show();




}