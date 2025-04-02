const nota1 = 8
const nota2 = 5
const nota3 = 2
const media = (nota1 + nota2 + nota3) / 3

if(media < 5){
    console.log(`Sua média foi ${media.toFixed(2)}, portanto está REPROVADO!`)
} else if(media >= 5 && media <= 7){
    console.log(`Sua média foi ${media.toFixed(2)}, portanto está de RECUPERAÇÃO!`)
} else{
    console.log(`Sua média foi ${media.toFixed(2)}, portanto PASSOU DE SEMESTRE!`)
}