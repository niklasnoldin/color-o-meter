import greeting from './greeting';

require('./sass/index.scss');

// example code
var messages = ['Hi', 'from', 'Webpack'];

messages.map(message => {
  console.log(`${message}`);
});

console.log(greeting('Niklas'));
