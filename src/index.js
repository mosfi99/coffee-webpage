import './styles.css';
import { renderHome } from './home.js';

const content = document.querySelector('#content');

content.append(renderHome());
