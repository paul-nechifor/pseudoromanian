import pseudo from 'pseudoromanian-generator';

function byId(id) {
  return document.getElementById(id);
}

function addOnClick(el, fn) {
  el.addEventListener('click', fn, false);
}

const generateNewBtn = byId('generate-new-btn');
const text = byId('generated-text');

function generateNew() {
  text.innerHTML = pseudo.tot();
}

addOnClick(generateNewBtn, generateNew);

generateNew();
