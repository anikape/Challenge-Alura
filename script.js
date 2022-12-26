var textInput = document.querySelector('#textArea');

function criptografar() {
  var texto = textInput.value;
  console.log(texto);

  var resultCripto = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  console.log(resultCripto);

  document.querySelector(
    '#resultado',
  ).innerHTML = `${resultCripto}<br/><br/><br/><button id="copy" class="btnCopy" onClick ="copiarTexto()"> Copiar </button>`;

  document.querySelector('#resultHidden').style.display = 'flex';

  document.querySelector('.desktop').style.display = 'none';
  document.querySelector('.mensagem').style.display = 'none';
}

function descriptografar() {
  var texto = textInput.value;

  var resultCripto = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  document.querySelector('#resultado').innerHTML =
    resultCripto +
    '<br/><br/><br/><button id="copy" class="btnCopy" onClick ="copiarTexto()"> Copiar </button>';

  document.querySelector('#resultHidden').style.display = 'flex';

  document.querySelector('.desktop').style.display = 'none';
  document.querySelector('.mensagem').style.display = 'none';
}

let btn = document.querySelector('#copy');

btn.addEventListener('click', function (e) {
  let textArea = document.querySelector('#resultado');
  textArea.select();
  document.execCommand('copy');
});
