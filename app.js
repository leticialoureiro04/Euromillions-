express = require('express');

app = new express();

app.use(express.static('public'));

function gerador(n, min, max) {
    aposta = new Set();

    while (aposta.size < n) {
        numero =Math.floor(Math.random() * (max - min + 1) + min);
        aposta.add(numero);
    }
    return [...aposta].sort((a, b) => a - b);

}
function gerarchave() {
    chave = {
        'numeros': [],
        'estrelas': [],
        'geradapor': 'Letícia Loureiro'
    
    };
    chave.numeros = gerador(5, 1, 50);
    chave.estrelas = gerador(2, 1, 12);
    return JSON.stringify(chave);
}

app.get('/', function (req, res) {
    res.send('gerador de chaves em /euro!');
});


app.get('/euro', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(gerarchave());
    //res.send('{"numeros": [1, 2, 3, 4, 5], "estrelas": [1, 2, 3], "geradapor": "Diogo Azevedo"}');
    res.send(gerarchave());
});

app.listen(3000, function () {
    console.log('App express em funcionamento na porta 3000');
});


