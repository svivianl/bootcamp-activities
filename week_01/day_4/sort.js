var array = [10, 2, 5, 1, 9];
array.sort((a,b) => a - b);



var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort((data1, data2) => {
  if(data1.name === data2.name){
    // age descendent
    return data2.age - data1.age;
  }else{
    return data1.name > data2.name;
    }
})