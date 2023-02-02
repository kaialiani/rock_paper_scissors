const choices = ['rock', 'paper', 'scissors'];
      const buttons = document.querySelectorAll('.choice-btn');
      const result = document.querySelector('#result');
      const computerChoiceImg = document.querySelector('#computer-choice');
      const heart1 = document.querySelector('')

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          const userChoice = button.id;
          const computerChoice = choices[Math.floor(Math.random() * 3)];

          computerChoiceImg.src = `pictures/${computerChoice}.png`;
          computerChoiceImg.alt = computerChoice;

          if (userChoice === computerChoice) {
            result.textContent = 'It is a tie!';
          } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
          ) {
            result.textContent = 'You win!';
          } else {
            result.textContent = 'Computer wins!';
          }
        });
      });