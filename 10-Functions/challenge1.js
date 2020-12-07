'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : type === 'string'
      ? console.log(`Poll results are ${this.answers.join(', ')}`)
      : console.log('ERROR: wrong input type');
  },
  registerNewAnswer() {
    //destructure options
    const [zero, one, two, three] = this.options;
    const answer = Number(
      prompt(
        `${this.question} \n ${zero} \n ${one} \n ${two} \n ${three} \n (Enter option number)`
      )
    );
    //another way to register answer by short circuiting
    // typeof answer == 'number' && answer < this.answers.length && this.answers[answer]++
    if (answer === 0) {
      this.answers[0] += 1;
    } else if (answer === 1) {
      this.answers[1] += 1;
    } else if (answer === 2) {
      this.answers[2] += 1;
    } else if (answer === 3) {
      this.answers[3] += 1;
    } else {
      console.log(`Please enter a valid number`);
      alert(`WRONG INPUT`);
      return this.registerNewAnswer();
    }
    this.displayResults();
    this.displayResults('string');
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//BONUS
//The call() method calls a function with a given this value and arguments provided individually.
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');

//Challenge 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  header.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
