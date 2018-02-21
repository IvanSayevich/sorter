class Sorter {
  constructor() {
    this.store = [];
    this.sortMethod = (a,b)=>a-b;
  }

  add(element) {
    return this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return(this.store.length);
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
    let sortedArray = [];
    indices.forEach(element=>sortedArray.push(this.store[element]));
    sortedArray.sort(this.sortMethod);
    indices.sort((a,b)=>a-b);
    return indices.forEach((element, index)=>this.store.splice(element, 1, sortedArray[index]));
  }

  setComparator(compareFunction) {
    this.sortMethod=compareFunction;
  }
}

module.exports = Sorter;