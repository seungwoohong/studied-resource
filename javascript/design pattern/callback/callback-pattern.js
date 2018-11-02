setTimeout(getPanther, 1, 'Panther');

var catList = '';

function getPanther(name) {
  catList = name + ', ';

  setTimeout(getJaguar, 1, 'Jaguar');
}

function getJaguar(name) {
  catList += name + ', ';

  setTimeout(getLynx, 1, 'Lynx');
}

function getLion(name) {
  catList += name;

  console.log('catList: ', catList);
}