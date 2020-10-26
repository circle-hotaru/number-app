const axios = require('axios');

export const store = {
  state: {
    numbers: [1, 2, 3],
    text: '3 is the number of spatial dimensions we perceive our universe to have.'
  },
  addNumber(newNumber) {
    this.state.numbers.push(newNumber);
    axios.get('http://numbersapi.com/'+ newNumber)
      .then(response => {
          this.state.text = response.data;
          console.log(response);
          })
  },
};