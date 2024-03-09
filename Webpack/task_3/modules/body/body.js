import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';


let count = 0;
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`)
}

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');

const debouncedUpdate = _.debounce(updateCounter, 500)

$('button').on('click', debouncedUpdate)