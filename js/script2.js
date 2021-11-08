// Importe de header e footer
// $.get('testeHeader.html', function (html) {
//   $('header').append(html);
// })

// $.get('testeFooter.html', function (html) {
//   $('footer').append(html);
// })

// Tratamento do FORMULÁRIO
// Função para chamar MODAL personalizado
function caixaModal(titulo, msg, obj="", cor="#F59D0E") {
  obj = obj.substr(0, 1).toUpperCase() + obj.substr(1)
  let pf = obj?`'${obj}'.`:obj
  $("#janelaModal").css({display: "block"})
  $("#barraTituloModal").html(titulo)
  $("#barraTituloModal").css({background: cor})
  $("#mensagemModal").html(`${msg} ${pf}`)
  $("#botaoOkModal").click(function () {
    $("#janelaModal").css("display", "none")
  })
}
// VALIDAÇÃO DO FORM
var campo = {
  todos: $(".obrigatorio"),
  input : $("input[class='obrigatorio']"),
  radio : $(".obrigatorio:radio:checked"),
  date : $("input#date"),
  validarForm : function(){
    let cont = 0
    let msg = ""
    for(let i=0; i < campo.todos.length; i++){
      if(campo.todos[i].value == ""){
        let nome = campo.todos[i].name
        msg += "<li>"+nome.substr(0, 1).toUpperCase()+ nome.substr(1)+"\n"+"</li>"
        cont++
      }
    }
    if ($(".obrigatorio:radio:checked").length == 0){
      let nome = "sexo"
      msg += "<li>"+nome.substr(0, 1).toUpperCase()+ nome.substr(1)+"\n"+"</li>"
      cont++
    }
    campoVazio = cont
    let s = cont>1?"s":""
    cont>0?caixaModal(`Preencha ${campoVazio} campo${s} obrigatório${s}`, msg):caixaModal("Obrigado por se cadastrar!", "Formulário enviado com sucesso.","","lime")
  }
}
$("#enviar").on("click", campo.validarForm )
// VERIFICAÇÃO DE CAMPOS EM BRANCO
$(".obrigatorio").blur(function () {
  if ($(this).val()=="") {
    caixaModal("Campo obrigatório!", "Preencha o campo", this.name)
    $(this).css("border-bottom", "1px solid red")
    // Tratamento campo E-MAIL
  }else if (this.id =="email"){
    if(this.value.match(/[A-Z a-z 0-9]+@[a-z]+\.[a-z]+/)){
      $(this).css("border-bottom", "1px solid gray")
    }else{
      caixaModal("E-mail inválido", "Exemplo: nome@email.com")
      $(this).css("border-bottom", "1px solid red")
    }
  }else {
    $(this).css("border-bottom", "1px solid gray")
  }
})

// VALIDAÇÃO CEP
const apresentaDados = (resultado) => {
  for (let campo in resultado) {
    if (document.querySelector("#" + campo)) {
      console.log(campo)
      document.querySelector("#" + campo).value = resultado[campo]
    }
  }
}

function consultaCep() {
  let cepDigitado = $("#cep").val()

  if (cepDigitado.value == "") {
    cepDigitado.style.border = "1px solid red"
  } else {
    let cepProcurado = cepDigitado.replace('-', '')
    console.log(cepProcurado)

    fetch(`http://viacep.com.br/ws/${cepProcurado}/json`)
      .then(response => {
        response.json()
        .then(data => console.log(apresentaDados(data)))
      })
      .catch(x => cepProcurado==""?null:caixaModal("Atenção!", "Este CEP não foi encontrado."))
  }
}

