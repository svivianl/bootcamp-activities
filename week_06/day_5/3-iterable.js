class Group{

  constructor(){
    this.values = [];
  }

  has(value){
    if(this.values.includes(value)){
      return true;
    }else{
      return false;
    }
  }

  add(value){
    if(!this.has(value)) this.values.push(value);
  }

  delete(value){
    const index = this.values.indexOf(value);
    if(index !== -1) this.values.splice(index);
  }


  static from(values){
    const group = new Group();

    values.forEach(value => {
      group.add(value);
    });

    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.values.length) {
      return {done: true};
    } else {
      let result = {value: this.group.values[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
