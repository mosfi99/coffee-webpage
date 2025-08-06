import './styles.css';
import { renderHome } from './home.js';
import { renderAbout } from './about.js';
import { renderMenu } from './menu.js';

const content = document.querySelector('#content');
const btnMenu = document.querySelector('#menu');
const btnAbout = document.querySelector('#about');
const btnHome = document.querySelector('#home');

function changeContent(chosenContent) {
	if (!chosenContent) return;
	content.textContent = '';
	content.append(chosenContent);
}

btnMenu.addEventListener('click', () => {
	changeContent(renderMenu());
});

btnAbout.addEventListener('click', () => {
	changeContent(renderAbout());
});

btnHome.addEventListener('click', () => {
	changeContent(renderHome());
});

changeContent(renderHome());
