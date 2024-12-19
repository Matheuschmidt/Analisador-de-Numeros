let existentes = [];


function adicionar(){
    var num = document.querySelector('#txtnum')
    var lista = document.querySelector('#lstnum');
    var res = document.querySelector('#res');


    var numValue = Number(num.value);
    if(numValue <= 0 || numValue > 100 || isNaN(numValue)){
        alert('Por favor, insira um número válido.');
        num.value = "";
        num.focus();
    }else{
        if(existentes.includes(numValue)){
            alert('Este número já existe na lista.');
            num.value = ''; // limpa input
            num.focus();
        }else{
            existentes.push(numValue);
            num.value = ''; // limpa input
            num.focus();
            while(true){
                var item = document.createElement('option');
                item.text = `Valor ${numValue} foi adicionado`;
                lista.appendChild(item);
                lista.add(numValue);
            }
        }
    }
}

function finalizar(){
    if (existentes.length == 0){
        alert('A lista está vazia.');
    }else{
        let total = existentes.length;


        res.innerHTML = '';
        res.innerHTML += `<p>Total de valores adicionados: ${total}</p>`;
        res.innerHTML += `<p>Maior valor: ${Math.max(...existentes)}</p>`;
        res.innerHTML += `<p>Menor valor: ${Math.min(...existentes)}</p>`;
        res.innerHTML += `<p>Soma dos valores: ${existentes.reduce((a, b) => a + b, 0)}</p>`;
        res.innerHTML += `<p>Média dos valores: ${existentes.reduce((a, b) => a + b, 0) / total}</p>`;
        res.innerHTML += `<p>Valores em ordem crescente: ${existentes.sort((a, b) => a - b).join(', ')}</p>`;
        existentes = []; // limpa array existentes para nova lista
    }
}
