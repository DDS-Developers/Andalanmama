/*
 * List.js
 */
const List = {
  getItemById(id, items, key = 'id') {
    return items.find(item => item.get(key) === id);
  },

  isItemExists(id, items, key = 'id') {
    let status = false;
    if (items.find(item => item.get(key) === id)) {
      status = true;
    }
    return status;
  },

  isValueExists(value, items) {
    let status = false;
    if (items.includes(value)) {
      status = true;
    }
    return status;
  },

  removeValue(value, items) {
    return items.filterNot(item => item === value);
  },

  removeItemById(id, items, key = 'id') {
    return items.filterNot(item => item.get(key) === id);
  },

  getLastIndexList(list) {
    let index = 1;
    if (list.count() > 0) {
      const items = list.toArray();
      for (let i = 0; i < items.length; i += 1) {
        const id = items[i].get('id');
        if (index < id) {
          index = id;
        }
      }
      index += 1;
    }
    return index;
  },

  updateItem(list, data) {
    const index = list.findKey(item => item.get('id') === data.get('id'));
    let newList = list;
    if (index !== undefined) {
      newList = list.set(index, data);
    }
    return newList;
  },

  changeItemData(list, id, name, value, key = 'id') {
    const index = list.findKey(item => item.get(key) === id);
    let newList = list;
    if (index !== undefined) {
      const item = list.get(index);
      const newItem = item.set(name, value);
      newList = list.set(index, newItem);
    }
    return newList;
  },
};

export default List;
