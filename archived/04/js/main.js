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

const number0 = [
  { top: 0, left: 1 },
  { top: 0, left: 2 },
  { top: 0, left: 3 },
  { top: 1, left: 1 },
  { top: 1, left: 3 },
  { top: 2, left: 1 },
  { top: 2, left: 3 },
  { top: 3, left: 1 },
  { top: 3, left: 3 },
  { top: 4, left: 1 },
  { top: 4, left: 2 },
  { top: 4, left: 3 },
];

const dot = [
  { top: 4, left: 2 },
];

const equal = [
  { top: 1, left: 1 },
  { top: 1, left: 2 },
  { top: 1, left: 3 },
  { top: 3, left: 1 },
  { top: 3, left: 2 },
  { top: 3, left: 3 },
];

const plus = [
  { top: 1, left: 2 },
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
  { top: 3, left: 2 },
];

const minus = [
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
];

const multiplication = [
  { top: 1, left: 1 },
  { top: 1, left: 3 },
  { top: 2, left: 2 },
  { top: 3, left: 1 },
  { top: 3, left: 3 },
];

const division = [
  { top: 0, left: 2 },
  { top: 2, left: 1 },
  { top: 2, left: 2 },
  { top: 2, left: 3 },
  { top: 4, left: 2 },
];

const move = (number, { top, left }) => number.map(n => ({ top: n.top + top, left: n.left + left }));

const numberMap = {
  '0': number0,
  '1': number1,
  '2': number2,
  '3': number3,
  '4': number4,
  '5': number5,
  '6': number6,
  '7': number7,
  '8': number8,
  '9': number9,
};

const calculator = (function () {
  const maxLength = 7;
  let num = '0';
  let oldNum = '';
  let operator = '';

  return {
    number: function (val) {
      if (_.trimStart(num, '0').length >= maxLength) {
        return;
      }
      num = _.trimStart(num, '0') + `${val}`;
      this.display();
    },
    operator: function (val) {
      operator = val;
      oldNum = num;
      num = '0';
      this.display();
    },
    equal: function () {
      try {
        num = eval(num + operator + oldNum) + '';
        this.display();
      } catch(e) {
        console.error(e);
      }
    },
    display: function () {
      const fragment = document.createDocumentFragment();
      num.split('').reverse().forEach((n, idx) => {
        const cells = move(numberMap[n], { top: 0, left: (maxLength - idx - 1) * 5 });
        for (let i = 0; i < cells.length; i++) {
          const div = document.createElement('div');
          div.style.top = `${cells[i].top * 10}px`;
          div.style.left = `${cells[i].left * 10}px`;
          div.className = `cell `;
          fragment.appendChild(div);
        }
      });
      const parent = document.querySelector('.result-inner');
      while (parent.firstChild) {
        parent.firstChild.remove();
      }
      document.querySelector('.result-inner').appendChild(fragment);
    }
  }


})();

const keys = [
  { position: { top: 0, left: 0 }, cells: number7, onClick: () => calculator.number(7) },
  { position: { top: 0, left: 5 }, cells: move(number8, { top: 0, left: 5 }), onClick: () => calculator.number(8) },
  { position: { top: 0, left: 10 }, cells: move(number9, { top: 0, left: 10 }), onClick: () => calculator.number(9) },
  { position: { top: 0, left: 15 }, cells: move(division, { top: 0, left: 15 }), onClick: () => calculator.operator('/') },
  { position: { top: 7, left: 0 }, cells: move(number4, { top: 7, left: 0 }), onClick: () => calculator.number(4) },
  { position: { top: 7, left: 5 }, cells: move(number5, { top: 7, left: 5 }), onClick: () => calculator.number(5) },
  { position: { top: 7, left: 10 }, cells: move(number6, { top: 7, left: 10 }), onClick: () => calculator.number(6) },
  { position: { top: 7, left: 15 }, cells: move(multiplication, { top: 7, left: 15 }), onClick: () => calculator.operator('*') },
  { position: { top: 14, left: 0 }, cells: move(number1, { top: 14, left: 0 }), onClick: () => calculator.number(1) },
  { position: { top: 14, left: 5 }, cells: move(number2, { top: 14, left: 5 }), onClick: () => calculator.number(2) },
  { position: { top: 14, left: 10 }, cells: move(number3, { top: 14, left: 10 }), onClick: () => calculator.number(3) },
  { position: { top: 14, left: 15 }, cells: move(minus, { top: 14, left: 15 }), onClick: () => calculator.operator('-') },
  { position: { top: 21, left: 0 }, cells: move(number0, { top: 21, left: 0 }), onClick: () => calculator.number(0) },
  { position: { top: 21, left: 5 }, cells: move(dot, { top: 21, left: 5 }), onClick: () => calculator.number('.') },
  { position: { top: 21, left: 10 }, cells: move(equal, { top: 21, left: 10 }), onClick: () => calculator.equal() },
  { position: { top: 21, left: 15 }, cells: move(plus, { top: 21, left: 15 }), onClick: () => calculator.operator('+') },
];

const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();

for (let i = 0; i < keys.length; i++) {
  const keyContainer = document.createElement('div');
  keyContainer.className = 'digit';
  keyContainer.style.top = `${keys[i].position.top * 20}px`;
  keyContainer.style.left = `${keys[i].position.left * 20}px`;
  keyContainer.addEventListener('mouseover', () => {
    anime({
      targets: `.key${i}`,
      scale: 0.6,
      easing: 'easeInSine',
      duration: 200
    });
  });
  keyContainer.addEventListener('mouseout', () => {
    anime({
      targets: `.key${i}`,
      scale: 1,
      easing: 'easeInSine',
      duration: 200
    });
  });
  keyContainer.addEventListener('click', () => {
    keys[i].onClick()
  });
  fragment.appendChild(keyContainer);

  for (let j = 0; j < keys[i].cells.length; j++) {
    const div = document.createElement('div');
    div.style.top = `${(_.random(-9, 26) * 20)}px`;
    div.style.left = `${_.random(-8, 23) * 20}px`;
    div.className = `cell key${i}`;
    fragment.appendChild(div);
  }
}

staggerVisualizerEl.appendChild(fragment);

const elements = document.querySelectorAll('.stagger-visualizer div.cell');

const numbers = _.flattenDeep(keys.map(k => k.cells));
elements.forEach((elt, idx) => {
  const { top, left } = numbers[idx];
  anime({
    targets: elt,
    left: left * 20,
    top: top * 20,
    easing: 'easeInOutQuad'
  });
});

