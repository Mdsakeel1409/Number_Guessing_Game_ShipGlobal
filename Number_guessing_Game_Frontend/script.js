const guessInput = document.getElementById('guessInput');
const checkButton = document.getElementById('checkButton');
const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsCount = 0;

checkButton.addEventListener('click', () => {
    if (attemptsCount >= 5) {
        feedback.textContent = "You've run out of attempts.";
        checkButton.disabled = true; // Disable the button
        return;
    }

    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        feedback.textContent = 'Please enter a valid number.';
    } else if (guess < 1 || guess > 100) {
        feedback.textContent = 'Guess must be between 1 and 100.';
    } else {
        attemptsCount++;
        attempts.textContent = `Attempts: ${attemptsCount}`;

        if (guess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the number in ${attemptsCount} attempts.`;
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attemptsCount = 0;
        } else if (guess < randomNumber) {
            feedback.textContent = 'Your guess is too low.';
        } else {
            feedback.textContent = 'Your guess is too high.';
        }
    }
});
