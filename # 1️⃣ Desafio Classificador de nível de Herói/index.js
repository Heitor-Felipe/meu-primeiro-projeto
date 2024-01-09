let xp = 0
let nivel_do_jogador = 0
let nome = "Heitor"


while (nivel_do_jogador != "Radiante") {
    if (xp <= 1000) {
        nivel_do_jogador = "Ferro"
        }
        if (xp >= 1001 && xp <= 2000) {
        nivel_do_jogador = "Bronze"
        }
        if (xp >= 2001 && xp <= 5000) {
            nivel_do_jogador = "Prata"
        }
        if (xp >= 5001 && xp <= 7000) {
            nivel_do_jogador = "Ouro"
        }
        if (xp >= 7001 && xp <= 8000) {
            nivel_do_jogador = "Platina"
        }
        if (xp >= 8001  && xp <= 9000) {
            nivel_do_jogador = "Ascendente"
        }
        if (xp >= 9001  && xp <= 10000) {
            nivel_do_jogador = "Imortal"
        }
        if (xp >= 10001) {
            nivel_do_jogador = "Radiante"
        }
        
        console.log(` O Herói de nome ${nome} está no nível de ${nivel_do_jogador}`)
       xp+=500
}