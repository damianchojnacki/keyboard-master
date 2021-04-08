export default class Leaderboard{
    static show(scores = {}, letters = []) {
        const element = document.getElementById("leaderboard");
        const timeTotal = document.getElementById("timeTotal");
        const timeAvg = document.getElementById("timeAvg");
        const correctRatio = document.getElementById("correctRatio");

        element.classList.remove("hidden");
        setTimeout(() => element.classList.add("opacity-100"), 500);

        timeTotal.innerHTML = this.getTotalTime(scores.time).toFixed(2) + " s";
        timeAvg.innerHTML = this.getAvgTime(letters).toFixed(2) + " s";
        correctRatio.innerHTML = this.getCorrectRatio(letters);
    }

    static getTotalTime(time = {}){
        return (time.end - time.start) / 1000;
    }

    static getAvgTime(letters){
        return letters.reduce((total, next) => total + this.getTotalTime(next.time), 0) / letters.length;
    }

    static getCorrectRatio(letters){
        return this.getCorrectLength(letters) + " / " + letters.length;
    }

    static getCorrectLength(letters){
        return letters.map((letter) => letter.correct).filter(Boolean).length;
    }
}