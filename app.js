const container = document.querySelector('.color-group');
let colorArray = [];

class ColorItem {
  constructor(color, id) {
    this.color = color;
    this.id = id;
  }
  generateElement() {
    this.colorItem = document.createElement('DIV');
    this.colorItem.classList.add('color-item');
    this.colorItem.style.background = `#${this.color}`;

    this.colorItem.innerHTML = `<button onclick="removeItem()"><i class="fas fa-times"></i></button>
    <button><i class="fas fa-lock-open"></i></button>
    <button><i class="fas fa-sliders-h"></i></button>
    <p class="color-name">${this.color}</p>`;
    this.colorItem.style.background = `#${this.color}`;
    return this.colorItem;
  }
  removeItem() {
    colorArray.splice(this.id, 1);
    updateContainer(colorArray);
  }
}

function generateColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return n.slice(0, 6);
}

function reloadColors(event) {
  if (event.code === 'Space') {
    colorArray = [];
    container.innerHTML = '';
    for (let i = 0; i < 5; i++) {
      let newColor = new ColorItem(generateColor(), i);
      colorArray.push(newColor);
    }
    updateContainer(colorArray);
  }
}

function updateContainer(array) {
  array.forEach((color) => {
    container.appendChild(color.generateElement());
    color.colorItem.style.width = `${100 / array.length}%`;
  });
}

window.addEventListener('keydown', reloadColors);
