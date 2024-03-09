import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import holbertonImg from '../assets/holberton-logo.jpg';

let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`)
}

const image = `<img src="${holbertonImg}" alt="holberton-log" width="200" height="200">`

$('body').append(`<a id="logo" href="index.html">${image}</a>`)
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const debouncedUpdate = _.debounce(updateCounter, 500)

$('button').on('click', debouncedUpdate)