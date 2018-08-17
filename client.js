////// start tiny tiny lib

const D = document
const $ = D.querySelector.bind(D)
const $$ = (selector, startNode = D) => [...startNode.querySelectorAll(selector)]

Array.prototype.on = function(type, listener, options) {
  this.map(el => {
    if (el instanceof Element) {
      el.addEventListener(type, listener, options)
    }
  })
  return this // for chaining
}

////// end lib


function onload() {
  console.log("page has loaded")

  // for example...
  /*
  $$('article p').on('click', function (evt) {
    if (evt.target.style.background !== 'red') {
      evt.target.style.background = "red"
    } else {
      evt.target.style.background = "transparent"
    }
  }).on('mouseover', function (evt) {
    evt.target.style['font-weight'] = "bold"
  }).on('mouseout', function (evt) {
    evt.target.style['font-weight'] = "normal"
  })
  */
}

