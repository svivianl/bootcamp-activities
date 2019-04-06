// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

// Given these parameters, write a program so that you can figure out how many total bottles of pop can be redeemed given a customer investment.
//

var myArgs = process.argv.slice(2);

name(myArgs[0]);

function name(value){
  try{

    var obj = {
      init:  {
        bottles: Math.trunc(value / 2),
        caps: Math.trunc(value / 2)
      },
      final: {
        bottles:0,
        caps: 0
      },
      remainder:{
        bottles: Math.trunc(value / 2),
        caps: Math.trunc(value / 2),
        //leftOver: Math.trunc(value % 2)
      }
    };

    // debugger;

    while(obj.remainder.bottles >= 2 || obj.remainder.caps >= 4){

      if(obj.remainder.bottles >= 2 ){

        obj.final.bottles += 2;
        obj.remainder.caps ++;
        obj.remainder.bottles --;
      }

      if(obj.remainder.caps >= 4){
        obj.final.caps += 4;
        obj.remainder.bottles ++;
        obj.remainder.caps -= 3;
      }


    }

    // obj.final.bottles += obj.remainder.bottles;
    // obj.final.caps = obj.remainder.caps;
    // debugger;
    // return obj.final.bottles;remainder

    console.log(`for $ ${value}.00`);
    console.log('TOTAL BOTTLES: ', obj.final.bottles + obj.remainder.bottles);
    console.log('REMAINING BOTTLES: ', obj.remainder.bottles);
    console.log('REMAINING CAPS: ', obj.remainder.caps);
    console.log('TOTAL EARNED:');
    console.log(' BOTTLES: ', obj.final.bottles / 2); 37
    console.log(' CAPS: ', obj.final.caps / 4); 18
  }catch(e){
      console.log(e.message);
  }
}




// function name(value){
//   var obj = {
//     init:  {
//       bottles: Math.trunc(value / 2),
//       caps: Math.trunc(value / 2)
//     },
//     final: {
//       bottles: Math.trunc(value / 2),
//       caps: Math.trunc(value / 2)
//     },
//     remainer:{
//       bottles: Math.trunc(value / 2),
//       caps: Math.trunc(value / 2),
//       leftOver: Math.trunc(value % 2)
//     }
//   };

//   debugger;

//   do{
//     obj = inner(obj);
//   } while(obj.remainer.bottles >= 2 || obj.remainer.caps >= 4)

//   debugger;

//   return obj.final.bottles;remainer
// }

// function getBottlesAndCaps(type, value, data){
//   // div = 2 for bottles
//   var div = 2;
//   var leftOver = 0;
//   var bottles = data.bottles;
//   var caps = data.caps;

//   if(type === 'caps'){ div = 4 ; }

//   if(type === 'bottles' && value >= div && Math.trunc(value % div) !== 0){
//     if(data.leftOver === 0){
//       leftOver = Math.trunc(value % div);
//     }else{
//       bottles ++;
//       caps ++;
//     }
//   }

//   return {
//     bottles: bottles + Math.trunc(value / div),
//     caps: caps + Math.trunc(value % div),
//     leftOver: leftOver
//   }
// }

// function inner(obj){
//   var newObj = Object.assign({}, obj);

//   var aux = {
//     bottles: 0,
//     caps: 0,
//     leftOver: newObj.remainer.leftOver
//   };
//   if(newObj.remainer.caps >= 4){
//     aux = getBottlesAndCaps('caps', newObj.remainer.caps, aux);
//   }

//   //how many bottles you can get and how many caps remain from X bottles
//   if(newObj.remainer.bottles >= 2){
//     aux = getBottlesAndCaps('bottles', newObj.remainer.bottles, aux);
//   }

//   newObj.final.bottles += aux.bottles;
//   newObj.final.caps = aux.caps;
//   newObj.remainer.bottles = aux.bottles;
//   newObj.remainer.caps = aux.caps;
//   newObj.remainer.leftOver = aux.leftOver;

//   return newObj;
// }



// function name(value){
//   var obj = {
//     data:  {
//       bottles: Math.trunc(value / 2),
//       bottleCaps: Math.trunc(value / 2)
//     },
//     remain: {
//       bottles: Math.trunc(value / 2),
//       bottleCaps: Math.trunc(value / 2)
//     }
//   };

//   debugger;

//   do{
//     obj = inner(obj);
//   } while(obj.remain.bottles >= 2 || obj.remain.bottleCaps >= 4)

//   debugger;

//   return obj.data.bottles;
// }

// function inner(obj){
//   var data = Object.assign({}, obj.data);
//   var remain = Object.assign({}, obj.remain);
//   var bottles = 0;

//   // how many bottles you can get and how many caps remain from X caps
//   if(remain.bottleCaps >= 4){
//     bottles = Math.trunc(remain.bottleCaps / 4);
//     var caps = Math.trunc(remain.bottleCaps % 4);

//     data.bottles += bottles;
//     data.bottleCaps = caps;
//     remain.bottles += bottles;
//     remain.bottleCaps = caps;
//     // remain.bottleCaps = Math.trunc(remain.bottleCaps % 4) + Math.trunc(remain.bottleCaps / 4);
//     // aux += Math.trunc(obj.bottleCaps / 4);
//     // objRemain.bottleCaps = obj.bottleCaps % 4;
//   }

//   //how many bottles you can get and how many caps remain from X bottles
//   if(remain.bottles >= 2){
//     bottles = Math.trunc(remain.bottles / 2);

//     data.bottles += bottles;
//     data.bottleCaps += bottles;
//     remain.bottleCaps += bottles;
//     remain.bottles -= bottles;
//     // remain.bottleCaps += Math.trunc(objRemain.bottles / 2) + Math.trunc(objRemain.bottles % 2);
//   }

//   var aux = {data: data, remain: remain};
//   return aux;
// }



// console.log(`10: ${name(10)}`);
// console.log(`20: ${name(20)}`);
// console.log(`30: ${name(30)}`);
// console.log(`40: ${name(40)}`);
