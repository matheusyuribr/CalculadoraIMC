const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if(nome !== '' && altura !== '' && peso !== '' ){
    
    const valorImc = (peso / (altura * altura)).toFixed(2);
    
    let classificacao = '';

    if(valorImc < 18.5){
        classificacao = 'abaixo do peso.';
    }else if(valorImc < 25){
        classificacao = 'você está com o peso ideal.';
    }else if(valorImc < 30){
        classificacao = 'você está levemente acima do peso.';
    }else if(valorImc < 35){
        classificacao = 'você está com obesidade grau 1.';
    }else if(valorImc < 40){
        classificacao = 'você está com obesidade grau 2.';
    }else{
        classificacao = 'você está com obesidade grau 3';
    }

    resultado.textContent = (`${nome} seu IMC é ${valorImc} e ${classificacao}`);

  }else{
      resultado.textContent = "Preencha todos os campos!";
  }

}

calcular.addEventListener('click', imc);
