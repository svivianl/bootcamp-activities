// Write a function that produces a data structure like the following, which lists
// each participant, and a list of who they've beaten.

// Output:

// {
//   'Alice': ['Bob', 'Carol'],
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
]

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

// ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
console.log(`players: ${players(data)}`);
// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }
console.log(`Beat:`);
console.log(beat(data));
