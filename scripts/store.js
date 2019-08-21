'use strict';

//This is an IIFE
const store = (function () {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  let findById = function(id) {
    return this.find(item => item.id === id);
  };

  let addItem = function(name) {
    try {
      Item.validateName(name);
      Item.create(name);
      this.items.push({ id: cuid(), name: name, checked: false });
    }
    catch(error) {
      console.log(`Cannot add item: ${error.message} for now.`);
    }
  };

  let findAndToggleChecked = function(id) {
    console.log(this);
    const idNumber = findById(id); //gives us the ID
    idNumber.checked = !idNumber.checked;
  };

  let findAndUpdateName = function(id, newName) {
    try {
      const idNumber = this.items.findById(id);
      Item.validateName(newName);
      idNumber.name = newName;
    }
    catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  let findAndDelete = function(id) {
    const index = this.items.findIndex(item => item); // { id: cuid(), name: 'apples', checked: false }
    this.items.splice(index, 1);
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}() );