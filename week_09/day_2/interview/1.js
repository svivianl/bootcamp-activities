// My friend Lee is a fan of foosball (insert/use another 1-on-1 game here). Lee plays in an amateur foosball league, has asked us for help writing a program to understand player rankings.

// We're given some game outcome data like the following:

// [
//   { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
//   { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
//   { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
//   { winner: 'Elise', loser: 'Carol', loser_points: 4 },
//   { winner: 'Alice', loser: 'Carol', loser_points: 2 },
//   { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
//   { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
// ]
// Write a function that returns a list of all the player names (no player should be listed more than once).

// ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']

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

// ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
console.log(`players: ${players(data)}`);
