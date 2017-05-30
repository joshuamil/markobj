module.exports = exports = markobj;

// Returns an object built from an HTML string
function markobj (html) {

  let rootEl = 'div';
  let rootIx = 0;

  // If you're creating elements that are children of tables, then you have to
  // use a table as the root element. A tbody is also appended to any newly
  // made table, so our returned index has to increase
  if (
    html.substring(1,3) === 'tr' ||
    html.substring(1,3) === 'td' ||
    html.substring(1,3) === 'th' ||
    html.substring(1,6) === 'tbody' ||
    html.substring(1,6) === 'thead' ||
    html.substring(1,6) === 'tfoot' ||
    html.substring(1,8) === 'caption' ||
    html.substring(1,4) === 'col' ||
    html.substring(1,9) === 'colgroup'
  ) {
    rootEl = 'table';
  }

  if (
    html.substring(1,6) === 'tbody' ||
    html.substring(1,6) === 'thead' ||
    html.substring(1,6) === 'tfoot'
  ) {
    rootIx = 0;
  }

  if (html.substring(1,3) === 'tr') {
    rootIx = 1;
  }

  if (html.substring(1,3) === 'td' || html.substring(1,3) === 'th') {
    rootIx = 2;
  }

  let tmp = document.createElement(rootEl);
  tmp.innerHTML = html;

  if(rootIx === 2) {
    return tmp.childNodes[0].childNodes[0].childNodes[0];
  } else if(rootIx === 1) {
    return tmp.childNodes[0].childNodes[0];
  }
  return tmp.childNodes[0];

}
