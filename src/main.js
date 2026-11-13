import { formatVersion } from './utils.js';

// Lab 6: change these three values, commit, push, and watch your site update.
const team = 'UOR Team 01';
const version = '1.0.1';
const message = 'Hello University of Ruhuna — we shipped this automatically!';

document.querySelector('#team').textContent = team;
document.querySelector('#version').textContent = formatVersion(version);
document.querySelector('#message').textContent = message;
