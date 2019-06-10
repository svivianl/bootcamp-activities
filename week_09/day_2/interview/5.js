// Notice that each time Alice and Carol played, Alice beat Carol. And each time
// Carol played Dean, Carol won. So even though Alice has not played Dean, it seems
// likely that Alice could beat Dean. For the math nerds, this is called "transitive
// closure".

// On the other hand, Dean beat Elise, who beat Carol, who beat Dean. This is a
// "cycle", so we cannot choose a "best" player.

// Write a function similar to the function from question 2, except that it includes
// indirect victories (but not indirect victories that cycle back to defeat the
// "winner").

// The resulting data structure would be:

// {
//   'Alice': ['Bob', 'Carol', 'Dean', 'Elise'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
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
        if( person !== key && (!input[person].includes(key))&&(! output[key].includes(person))){
          output[key].push(person);
        }
      })
    }
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
