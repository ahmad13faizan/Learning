// src/index.js
import './styles.scss';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello, Webpack with ESLint and SCSS!';
  return element;
}

document.body.appendChild(component());
