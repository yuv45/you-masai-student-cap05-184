class customarray {
  constructor(...elements) {
    this.size = elements.length;
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
  }
  push(ele) {
    this[this.size] = ele;
    this.size++;
    console.log(this);
  }

  pop(ele) {
    delete this[(this.size-1)];
    this.size--;
    console.log(this);
  }

  top() {
    console.log(this[this.size - 1]);
  }

  print() {
    let arr = [];
    for (let i = 0; i < this.size; i++) {
      arr.push(this[i]);
    }
    console.log(arr);
  }

  printreverse() {
    let arr = [];
    for (let i = this.size - 1; i >= 0; i--) {
      arr.push(this[i]);
    }
    console.log(arr);
  }
}

let array = new customarray(1, 2, 3, 4);

array.printreverse();
