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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
