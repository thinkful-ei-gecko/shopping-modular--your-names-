'use strict';

const Item = (function(){
  const foo = 'bar';

  function validateName(name) {
    if (!name) {
      throw new TypeError('Name does not exist');
    }
    console.log('this is working');
  }
  
  function create(name) {
    return {
      id: cuid(),
      name,
      checked: false
    };
  }

  return {
    validateName,
    create
  };
}());

