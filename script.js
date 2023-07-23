box3 = document.getElementById('res')
box3.style.display = 'none'

function verificarDados() {
    var box2 = document.getElementById('box2')
    var h2 = document.getElementById('h2')
    var img = document.getElementById('img')
    var nome = document.getElementById('inputnome').value
    var classe = document.getElementById('inputclasse').value
    if (nome == '' || classe == '') {
        alert('[ERRO] Preencha todos os campos para prosseguir!')
    } else if (classe.toLowerCase() == 'sereia' || classe.toLowerCase() == 'popstar' || classe.toLowerCase() == 'princesa') {
        box2.style.display = 'none'
        box3.style.display = ''
        h2.innerHTML = nome + ' é uma: '
        h2.innerHTML += classe
        img.src = 'img/barbie' + classe.toLowerCase() + '.jpeg'
    }
}