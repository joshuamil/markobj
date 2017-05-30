const markobj = require('./markobj');

// Assign a name variable
let name = 'MarkObj Example';

// Build some navigation
let navigation = markobj(`<nav id="nav-main">
  <ul>
    <li><a href="#">Home</a>
    <li><a href="#">About ${name}</a>
    <li><a href="#">Information</a>
  </ul>
</nav>`);

// Define the main content element
let main = markobj('<main id="content" class="main"></main>');

// Create some additional content
let content = markobj(`<div class="content">
  This is some HTML content for the ${name}.
</div>`);

let tableRow = markobj(`<tr>
  <td>${name}</td>
  <td>Cell 2</td>
  <td>Cell 3</td>
  <td>Cell 4</td>
</tr>`);

// Append everything to the DOM
document.querySelector('body').appendChild(navigation);
document.querySelector('body').appendChild(main);
document.querySelector('main').appendChild(content);
document.querySelector('main').appendChild(content);

// You can add content to tables
document.querySelector('#table-data').appendChild(tableRow);
