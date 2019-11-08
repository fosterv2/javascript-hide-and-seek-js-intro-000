
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div')
}

function increaseRankBy(n) {
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list l')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (lis[i].parseInt() + n).toString()
  }
  return lis
}

function deepestChild() {
  return document.querySelector('div.grand-node div div div div')
}
