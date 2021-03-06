function toString(carne, cerveja, refri){
    let respCarne = document.getElementById('respCarne');
    let respCerveja = document.getElementById('respCerveja');
    let respRefri = document.getElementById('respRefri');

    let caixaResp = document.getElementById('caixaResp');
    caixaResp.style.display = 'block';

    respCarne.innerHTML = 'São necessários ' + carne + 'kg de carne!';
    respCerveja.innerHTML = 'São necessários ' + cerveja + ' l de cerveja!';
    respRefri.innerHTML = 'São necessários ' + refri + ' garrafas de 2l de refri!';
}

function notificacao(n1, n2, n3){
    if(n1 != NaN && n2 != 0 && n3 != NaN){
        if(n1 > 0 && n2 > 0 && n3 > 0 ){
            return true;
        }else{
            alert('Digite os valores corretamente!');
        };
    }else{
        alert('Digite todos os valores!');
    };
}

function convertGarrafasRefri(n1){
    return (n1 / 2);
};

function calcular(){
    let pessoas = document.getElementById('pessoas');
    let criancas = document.getElementById('criancas');
    let horas = document.getElementById('horas');

    let nPessoas = parseInt(pessoas.value);
    let nCriancas = parseFloat((criancas.value) / 2);
    let nHoras = parseInt(horas.value);

    if(notificacao(nPessoas, nCriancas, nHoras) == true){
        if(nHoras < 6){
            let calcCarne = (((440 * nPessoas) + (440 * nCriancas))/1000);
            // Já em litros
            let calcCerveja = (1.2 * nPessoas);
            let calcRefri = Math.round(((1 * nPessoas) + (1 * nCriancas)));
            toString(calcCarne, calcCerveja, convertGarrafasRefri(calcRefri));

        }else{
            let calcCarne = (((650 * nPessoas) + (650 * nCriancas))/1000);
            // Já em litros
            let calcCerveja = (2.0 * nPessoas);
            let calcRefri = Math.round(((1.5 * nPessoas) + (1.5 * nCriancas)));
            toString(calcCarne, calcCerveja, convertGarrafasRefri(calcRefri));
        };
    }
}