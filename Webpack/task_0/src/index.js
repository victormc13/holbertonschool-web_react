import $ from 'jquery';

$(document).ready(function() {
  $('body').append([
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<p>').text('Copyright - Holberton School'),
  ]);
});
