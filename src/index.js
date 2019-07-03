import _ from 'lodash'
import * as THREE from 'three'

function component() {
  console.log(THREE)
  let element = document.createElement('div');

  element.innerHTML = _.join(['hello','webpackheihei'])

  return element;
}

document.body.appendChild(component());