let existentes = [];


function adicionar(){
    var num = document.querySelector('#txtnum')
    var lista = document.querySelector('#lstnum');
    var numValue = Number(num.value);

    if(numValue <= 0 || numValue > 100 || isNaN(numValue)){
        alert('Por favor, insira um número válido.');
        num.value = "";
    }else{
        if(existentes.includes(numValue)){
            alert('Este número já existe na lista.');
            num.value = ''; // limpa input
        }else{
            existentes.push(numValue);
            num.value = ''; // limpa input
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
    item.innerHTML = 'Finalizar';
}
