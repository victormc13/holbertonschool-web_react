import $ from 'jquery';

$(document).ready(() => {
  const paragraphsContent = [
    'Holberton Dashboard',
    'Dashboard data for the students',
    'Copyright - Holberton School'
  ];

  $(paragrapahsContent).each((index, value) => {
    const newParagraph = $('<p></p>').text.value;

    $('body').append(newParagraph);
  })
})
