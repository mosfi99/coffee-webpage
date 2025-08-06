import './styles.css';
import { renderHome } from './home.js';
import { renderAbout } from './about.js';
import { renderMenu } from './menu.js';

const content = document.querySelector('#content');

content.append(renderHome());
content.append(renderAbout());
content.append(renderMenu());
