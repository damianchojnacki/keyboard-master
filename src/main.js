import '../style.css'
import Letter from "./Letter";
import Leaderboard from "./Leaderboard";

window.config = {
    number: 10,
    difficulty: 1,
};

const scores = {
    time: {}
};

const letters = [];

const firstLetter = new Letter();
firstLetter.show();
letters.push(firstLetter);

letters.push(new Letter());

let position = 0;
let end = false;

document.addEventListener('keydown', (e) => {
    if(position === 0){
        scores.time.start = performance.now();
    }

    const previousLetter = position > 0 ? letters[position - 1] : null;
    const currentLetter = letters[position];
    const nextLetter = position <= config.number ? letters[position + 1] : null;

    e.key === currentLetter.key ? currentLetter.hit() : currentLetter.miss();

    nextLetter && nextLetter.show();
    previousLetter && previousLetter.remove();

    if(position <= config.number){
        position < config.number && letters.push(new Letter());

        position++;
    } else if(!end){
        setTimeout(() => currentLetter.remove(), 300);
        scores.time.end = performance.now();
        end = true;

        Leaderboard.show(scores, letters);
    }
});