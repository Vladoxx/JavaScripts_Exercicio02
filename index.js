let nome = prompt('Primeira pessoa, digite seu nome:')
let idade = Number(prompt('Primeira pessoa, digite seu idade:'))
let corFavorito = prompt('Primeira pessoa, digite seu cor favorito:')

let nome2 = prompt('Segunda pessoa, digite seu nome:')
let idade2 = Number(prompt('Segunda pessoa, digite seu idade:'))
let corFavorito2 = prompt('Segunda pessoa, digite seu cor favorito:')



console.log(`${nome};${nome2}`)
if (idade2 > idade) {//Segunda pessoa é maior
    console.log(`${nome2} é maior que ${nome}`)
} else if (idade2 < idade) {//Segunda pessoa é menor
    console.log(`${nome2} é menor que ${nome}`)
}


if (corFavorito == corFavorito2) { //Os cores são iguales
    console.log(`${nome} e ${nome2} gostam da mesma cor`)
} else {
    console.log(`${nome}
    gosta do cor ${corFavorito}, e ${nome2}
    gosta do cor ${corFavorito2} não são os mesmos.`)
}
