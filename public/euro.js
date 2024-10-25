document.addEventListener('DOMContentLoaded', function (e) {
    button = document.getElementById("genBtn");
    button.addEventListener('click', gerachave);

});
    
function gerador(n, min, max) {
    extracao = new Set();

    while (extracao.size < n) {
        novo = Math.floor(Math.random() * (max - min + 1) + min);
        extracao.add(novo);
    }
    return [...extracao].sort((a, b) =>  a - b);
}
function gerarchaveJSON() {
    let an = gerador(5, 1, 50);
    let ae = gerador(2, 1, 12);

    let chavejs = {
        numeros: an,
        estrelas: ae,
        geradapor: 'Letícia Loureiro' // Ou outro nome que queiras
    }

    // Converte para JSON
    let chavejson = JSON.stringify(chavejs);

    // Mostra o JSON na consola
    console.log(chavejson);

    return chavejson;
}
function consomeChaveJSON(chavejson) {
    let chavejs = JSON.parse(chavejson); // Converte o JSON de volta para um objeto JS

    // Atualiza os números principais
    let listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = ""; // Limpa os números antigos
    chavejs.numeros.forEach((numero) => {
        let newli = document.createElement("li");
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    });

    // Atualiza as estrelas
    let listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = ""; // Limpa as estrelas antigas
    chavejs.estrelas.forEach((estrela) => {
        let newli = document.createElement("li");
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    });
}
document.addEventListener('DOMContentLoaded', function (e) {
    let button = document.getElementById("genBtn");
    button.addEventListener('click', function() {
        // Gera a chave em JSON
        let chavejson = gerarchaveJSON();

        // Consome e exibe a chave
        consomeChaveJSON(chavejson);
    });
});



function gerachave(e) { 
    let an = gerador(5, 1, 50);
    let ae = gerador(2, 1, 12);

    console.log(gerador(5, 1, 50));
    console.log("vou gerar a chave", e);
    
    listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = "";
    an.forEach((numero) => {
        let newli = document.createElement("li");
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    })

    listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = "";
    ae.forEach((estrela) => {
        let newli = document.createElement("li");
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    })
}


