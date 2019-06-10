// Every game-record has a loser-score. The winner-score is two plus the loser-score,
// or five, whichever is greater. The margin is the difference between the two. For the
// winner, their margin is positive. For the loser, the margin is negative (i.e.
//   winner-margin * -1)

// Write a function that, for each player, gives their average (mean) margin.

// Output:

// {
//   'Alice': 2.5,   //   5 / 2
//   'Bob':  -2.5,   //  -5 / 2
//   'Carol': 0.25,  //   1 / 4
//   'Dean': -1,     //  -3 / 3
//   'Elise': 0.66,  //   2 / 3
// }

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
      if(!output.hasOwnProperty(loser)){
        output[loser] = [key];
      }else if(output.hasOwnProperty(loser) && (! output[loser].includes(key))){
        output[loser].push(key);
      }
    })
  }

  return output;
}

const playersFromBeatenBy = (input) => {
  return Object.keys(input);
}

const transitiveClosure = (input) => {

  const output = Object.assign({}, input);

  for(let key in output){

    for(let i = 0; i < output[key].length; i++){
      const loser = output[key][i];

      output[loser].forEach(person => {
        if( person !== key && (! output[key].includes(person))){
          output[key].push(person);
        }
      })

    }
  }

  return output;
}

const reducer = (acc, currentValue) => acc + currentValue;

const margin = (input) => {

  const score = {};
  const output = {};

  input.forEach(row => {

    if(!score.hasOwnProperty(row.winner)){
      score[row.winner] = [];
    }

    if(!score.hasOwnProperty(row.loser)){
      score[row.loser] = [];
    }

    let margin = 2;
    if(2 + row.loser_points <= 5){
      margin = 5 - row.loser_points;
    }

    score[row.winner].push(margin);
    score[row.loser].push(row.loser_points * -1);
  })

  for(let key in score){
    output[key] = score[key].reduce(reducer) / score[key].length;
  }

  return output;
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

console.log(`Transitive Closure:`);
console.log(transitiveClosure(beatData));

console.log("Margin:");
console.log(margin(data));
