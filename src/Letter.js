export default class Letter{
    constructor(key) {
        const range = [
            "abcdefghijklmnopqrstuvwxyz",
            "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż",
        ];

        this.key = key ?? range[config.difficulty - 1][Math.floor(Math.random() * (range[config.difficulty - 1].length - 1))];

        const element = document.createElement("span");

        element.classList.add("letter");
        element.classList.add("show");

        element.innerText = this.key;
        element.id = Math.round((Math.pow(36, 17) - Math.random() * Math.pow(36, 16))).toString(36).slice(1);

        this.element = element;

        document.getElementById("app").appendChild(this.element);

        this.time = {};
    }

    show(){
        this.element.classList.remove("show");

        this.time.start = performance.now();
    }

    hide(){
        this.element.classList.remove("show");
        this.element.classList.add("hide");

        this.time.end = performance.now();
    }

    remove(){
        this.element.classList.add("hidden");
    }

    hit(){
        this.element.classList.add("text-green-500");
        this.hide();
        this.correct = true;
    }

    miss(){
        this.element.classList.add("text-red-500");
        this.hide();
        this.correct = false;
    }
}