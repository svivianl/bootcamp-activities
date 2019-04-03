var network = {
  data : {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  },


  following: function(sum){
    bigList = {};

    for(var i = 0; i < Object.values(this.data).length; i++){
      var person = Object.values(this.data)[i];

      // check if person is in the bigList
      if(!bigList[person.name]){
        bigList[person.name] = {};
        bigList[person.name].following = [];
      }

      for (var j = 0; j < person.follows.length; j ++){
        // insert the people that he/she is following
        bigList[person.name].following.push(this.data[person.follows[j]].name)

        // if the following person is not in the bigList,
        // create it and insert it in the bigList
        if(!bigList[this.data[person.follows[j]].name]){
          bigList[this.data[person.follows[j]].name] = {};
          bigList[this.data[person.follows[j]].name].following = [];
          bigList[this.data[person.follows[j]].name].follower = [person.name];
        }else{
          // person is in the bigList and need to check
          if(!bigList[this.data[person.follows[j]].name].hasOwnProperty('follower')){
            bigList[this.data[person.follows[j]].name].follower = [];
          }
          if(!bigList[this.data[person.follows[j]].name].follower.includes(person.name)){
            bigList[this.data[person.follows[j]].name].follower.push(person.name);
          }
        }
      }
    }

    if(sum){
      var newBigList = {};
      for(var i = 0; i < Object.values(bigList).length; i++){
        newBigList[Object.keys(bigList)[i]] = {
          following: Object.values(bigList)[i].following.length,
          follower: Object.values(bigList)[i].follower.length
        }
      }
      return newBigList;
    }else{
      return bigList;
    }

  },

  mostFollowing : function(age){
    var most = 0;
    var name = '';
    for (var i = 0 ; i < Object.values(this.data).length; i ++) {
      // checks if age is empt or if,
      // age is not empt and the person is older than age
      // AND the person has more follows than the one that is saved on most and name variables
      if ( most < Object.values(this.data)[i].follows.length && (!age || (age && Object.values(this.data)[i].age > age ))) {
          most = Object.values(this.data)[i].follows.length;
          name = Object.values(this.data)[i].name;
        }
        // if (age && Object.values(this.data)[i].age > age){
        //   if ( most < Object.values(this.data)[i].follows.length){
        //     most = Object.values(this.data)[i].follows.length;
        //     name = Object.values(this.data)[i].name;
        //   }
        // } else if (!age) {
        //   if ( most < Object.values(this.data)[i].follows.length){
        //     most = Object.values(this.data)[i].follows.length;
        //     name = Object.values(this.data)[i].name;
        //   }
        // }
    }
    return name;
  },

  mostFollowers : function(age){
    var followers = {};
    // loops through people
    for (var i = 0 ; i < Object.values(this.data).length; i ++) {
        // loop through person follows
        for (var j = 0 ; j < Object.values(this.data)[i].follows.length; j ++) {
          if (!age || (age && this.data[Object.values(this.data)[i].follows[j]].age > age ))
            if(followers[Object.values(this.data)[i].follows[j]]){
              // if exists
              followers[Object.values(this.data)[i].follows[j]] += 1;
            }else{
              followers[Object.values(this.data)[i].follows[j]] = 1;
            }
        }
    }
    var most = 0;
    var name = '';
    for (var k = 0; k < Object.values(followers).length; k++) {
      if (most < Object.values(followers)[k]){
        most = Object.values(followers)[k];
        name = Object.keys(followers)[k]
      }
    }
    return this.data[name].name;
  },

  noFollowBack : function(){
    noFollow = [];
    for (var i = 0 ; i < Object.values(this.data).length; i++) {
      for (var j = 0 ; j < Object.values(this.data)[i].follows.length; j++) {
        if(! this.data[Object.values(this.data)[i].follows[j]].follows.includes(Object.keys(this.data)[i] )){
          noFollow.push(Object.keys(this.data)[i]);
          break;
        }
      }
    }

    return noFollow;
  }


};

console.log(network.following(true));