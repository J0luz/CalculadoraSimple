/*Tornando os botões clicaveis
  E pegando os valores */

let elemento = document.querySelectorAll('.content')
let resultado = document.querySelector('.resultado')
let outPut = document.querySelector('#mostrador')
let num = 0
let num2 = 0
let result = 0
let operador

let BtnId = elemento.forEach(function (button) {
  button.addEventListener('click', event => {
    let content = button.innerHTML
    let operation = button.innerHTML
    resultado.innerHTML += content

    calc(content, operation)

    // console.log(typeof num)
    // console.log(num2)
    // console.log(result)

    //pegando o calculo
  })
})

function calc(content, operation) {
  if (content == '=') {
    resultado.innerHTML = ''
    num = Number(num)
    if (operador == '+') result = num2 + num
    if (operador == '-') result = num2 - num
    if (operador == '*') result = num2 * num
    if (operador == '/') result = num2 / num
    resultado.innerHTML = result
    console.log(num)
    num = result
    content = 0
    // let text = document.createTextNode(content)
    // outPut.append(text)
  }

  if (
    operation == '+' ||
    operation == '-' ||
    operation == '*' ||
    operation == '/'
  ) {
    num

    operador = operation

    console.log(num)
    num2 = Number(num)
    num = 0
  } else num += content

  if (content === 'C') {
    resultado.innerHTML = ''
    num = 0
    num2 = 0
  }
}
/*
  ---------------------------
  fazer cálculo com mais de 2 variáveis
  fazer cálculo dando a prioridade ao numero entre parentes 
  tratar erros de digitação 
  
*/
