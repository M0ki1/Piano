'use strict';
const {Howl, Howler} = require('howler');
const notes = {'z':'audio/Piano.mf.C5.mp3', 'x':'audio/Piano.mf.D5.mp3',
               'c':'audio/Piano.mf.E5.mp3', 'v':'audio/Piano.mf.F5.mp3',
               'b':'audio/Piano.mf.G5.mp3', 'n':'audio/Piano.mf.A5.mp3',
               'm':'audio/Piano.mf.B5.mp3', ',':'audio/Piano.mf.C6.mp3'};
// var startTime = performance.now();
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  const note = notes[keyName];
  const audio = new Howl({
    src:[note]
  });
  audio.play();
});
// var endTime = performance.now();
// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
//use howler module and test it