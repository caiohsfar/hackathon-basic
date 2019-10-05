let instance = null;
import questions from './questions';

export default class Game {
    constructor(name) {

        this.players = []; //os players ja estao em ordem
        this.round = 0;
        this.currQuestion = 0;
        this.currTip = 0
        this.turn = 0;
        this.name = name;

        if (!instance) {
            instance = this;
        }
        return instance;
    }

    // chama o prox round
    nextRound() {
        this.round++;
    }

    // player do turno
    getCurrentPlayer() {
        const playerPos = this.round % 3;
        const player = this.players[playerPos];
        if (player.isPlaying) {
            return player;
        } else {
            this.nextRound();
            return this.getCurrentPlayer();
        }
    }

    // pontos para adicionar depois de responder certo
    addPlayerScore(diceValue) {
        this.currTip = 0;
        const player = this.getCurrentPlayer();
        player.score += diceValue;
        this.currQuestion++;
    }

    // player fora do jogo
    disablePlayer(player) {
        this.currTip = 0;
        player.isPlaying = false;
        this.currQuestion++;
    }

    // adiciona um jogador ao jogo
    addPlayer(player) {
        this.players.push(player)
    }

    // pega as dicas
    getTip() {
        const tips = questions[this.currQuestion].tips;
        if (this.currTip === tips.length) false;
        const currTips = tips[this.currTip];
        this.currTip++;
        return currTips;
    }

    // alternativas da pergunta
    getAlternatives() {
        return questions[this.currQuestion].alternatives;
    }

    // curiosidades
    getCuriosities() {
        const {curiosities} = questions[this.currQuestion]
        return curiosities[Math.floor(Math.random() * curiosities.length)];
    }

    // verifica se a resposta ta correta
    verifyAnswer(answer) {
        const questionAnsewer = questions[this.currQuestion].answer;
        return answer === questionAnsewer;
    }

    // ordena de acordo com o dado
    sort(diceResults) {
        const sorted = diceResults.sort((a, b) => (a.result < b.result) ? 1 : -1)
        this.players = sorted.map((result) => {
            return result.player;
        })
    }

}