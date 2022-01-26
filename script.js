//FUNÇÕES

//1 - crie uma função que exiba uma mensagem no console
function exibirMensagem() {
    console.log("Hello World!")
}
exibirMensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(natalia) {
    console.log("Meu nome é Natalia")
}
nome()

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function dados(nome, idade, musica) {
    console.log(`Meu nome é ${nome}, eu tenho ${idade} anos e o estilo de música que prefiro é ${musica}`)
}
dados("natalia", 33, "antiga")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function hobbi (musica, filme) {
    console.log(`Gosto muito do filme ${musica} e da música do Emilio Santiago ${filme}`)
}
hobbi("A vida é bela", "Coisas da paixão")