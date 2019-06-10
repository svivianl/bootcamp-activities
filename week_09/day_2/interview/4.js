// Question
// Again, write a function produce a list of all (distinct) players, as in Question 1.
// But this time, your input is the output from Question 3.

const data = [
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
];

const players = (input) =>{

  const output = [];

  input.forEach(row => {

    if(!output.includes(row.winner)){
      output.push(row.winner);
    }

    if(!output.includes(row.loser)){
      output.push(row.loser);
    }
  })

  return output;
}

const beat = (input) =>{

  const output = {};

  input.forEach(row => {

    if(!output.hasOwnProperty(row.winner)){
      output[row.winner] = [];
    }

    if(!output.hasOwnProperty(row.loser)){
      output[row.loser] = [];
    }

    if(!output[row.winner].includes(row.loser)){
      output[row.winner].push(row.loser);
    }
  })

  return output;
}

const beatenBy = (input) =>{

  const output = {};

  for(let key in input){

    if(!output.hasOwnProperty(key)){
      output[key] = [];
    }

    input[key].forEach(loser => {
      if(output.hasOwnProperty(loser)){
        output[loser].push(key);
      }else{
        output[loser] = [key];
      }
    })
  }

  return output;
}

const playersFromBeatenBy = (input) => {
  return Object.keys(input);
}

// ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
console.log(`players: ${players(data)}`);

const beatData = beat(data);
// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }
console.log(`Beat:`);
console.log(beatData);

const beatenByData = beatenBy(beatData);
// {
//   'Alice': [],
//   'Bob':   ['Alice', 'Elise'],
//   'Carol': ['Alice', 'Elise'],
//   'Dean':  ['Carol'],
//   'Elise': ['Dean']
// }
console.log(`Beaten by:`);
console.log(beatenByData);

console.log(`Players from beaten by:`);
console.log(playersFromBeatenBy(beatenByData));
