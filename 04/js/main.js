const number1 = [
  { top: 0, left: 2.5 },
  { top: 1, left: 1.5 },
  { top: 1, left: 2.5 },
  { top: 2, left: 2.5 },
  { top: 3, left: 2.5 },
  { top: 4, left: 2.5 }
];

const number2 = [
  { top: 1, left: 1 },
  { top: 0, left: 1 },
  { top: 0, left: 2 },
  { top: 0, left: 3 },
  { top: 1, left: 3 },
  { top: 2, left: 3 },
  { top: 2.5, left: 2 },
  { top: 3, left: 1 },
  { top: 4, left: 1 },
  { top: 4, left: 2 },
  { top: 4, left: 3 },
];

const number3 = [
  { top: 0, left: 1 },
  { top: 0, left: 2 },
  { top: 0, left: 3 },
  { top: 1, left: 3 },
  { top: 2, left: 3 },
  { top: 2, left: 2 },
  { top: 2, left: 1 },
  { top: 2, left: 1 },
  { top: 3, left: 3 },
  { top: 4, left: 3 },
  { top: 4, left: 2 },
  { top: 4, left: 1 },
];

const number4 = [
  { top: 0, left: 1 },
  { top: 1, left: 1 },
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
  { top: 1, left: 3 },
  { top: 0, left: 3 },
  { top: 3, left: 3 },
  { top: 4, left: 3 }
];

const number5 = [
  { top: 0, left: 1 },
  { top: 0, left: 2 },
  { top: 0, left: 3 },
  { top: 1, left: 1 },
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
  { top: 3, left: 3 },
  { top: 4, left: 3 },
  { top: 4, left: 2 },
  { top: 4, left: 1 },
];

const number6 = [
  { top: 0, left: 3 },
  { top: 0, left: 2 },
  { top: 0, left: 1 },
  { top: 1, left: 1 },
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
  { top: 3, left: 3 },
  { top: 4, left: 3 },
  { top: 4, left: 2 },
  { top: 4, left: 1 },
  { top: 3, left: 1 },
];

const number7 = [
  { top: 0, left: 1 },
  { top: 0, left: 2 },
  { top: 0, left: 3 },
  { top: 1, left: 3 },
  { top: 2, left: 2.5 },
  { top: 3, left: 2 },
  { top: 4, left: 1.5 },
];

const number8 = [
  { top: 0, left: 1 },
  { top: 0, left: 2 },
  { top: 0, left: 3 },
  { top: 1, left: 1 },
  { top: 1, left: 3 },
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
  { top: 3, left: 1 },
  { top: 3, left: 3 },
  { top: 4, left: 1 },
  { top: 4, left: 2 },
  { top: 4, left: 3 },
];

const number9 = [
  { top: 0, left: 1 },
  { top: 0, left: 2 },
  { top: 0, left: 3 },
  { top: 1, left: 1 },
  { top: 1, left: 3 },
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
  { top: 3, left: 3 },
  { top: 4, left: 1 },
  { top: 4, left: 2 },
  { top: 4, left: 3 },
];

const move = (number, { top, left }) => number.map(n => ({ top: n.top + top, left: n.left + left }));

const numbers = [
  ...number1,
  ...move(number2, { top: 0, left: 5 }),
  ...move(number3, { top: 0, left: 10 }),
  ...move(number4, { top: 7, left: 0 }),
  ...move(number5, { top: 7, left: 5 }),
  ...move(number6, { top: 7, left: 10 }),
  ...move(number7, { top: 14, left: 0 }),
  ...move(number8, { top: 14, left: 5 }),
  ...move(number9, { top: 14, left: 10 }),
];

const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const numberOfElements = numbers.length;

console.log(numberOfElements)

for (let i = 0; i < numberOfElements; i++) {
  const div = document.createElement('div');
  div.style.top = `${(_.random(-9, 26) * 20)}px`;
  div.style.left = `${_.random(-8, 23) * 20}px`;
  fragment.appendChild(div);
}

staggerVisualizerEl.appendChild(fragment);

const elements = document.querySelectorAll('.stagger-visualizer div');

elements.forEach((elt, idx) => {
  const { top, left } = numbers[idx];
  anime({
    targets: elt,
    left: left * 20,
    top: top * 20,
    easing: 'easeInOutQuad'
  });
});

