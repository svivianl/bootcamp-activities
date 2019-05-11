const uid = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const setTimeVariables = (time) => {
  let hour = 0;
  let min = 0;
  let sec = 0;

  const timeArray = time.split(':');

  if(timeArray.length === 3){
    hour = Number(timeArray[0]);
    min = Number(timeArray[1]);
    sec = Number(timeArray[2]);
  }else{
    min = Number(timeArray[0]);
    sec = Number(timeArray[1]);
  }
  return { hour, min, sec };
}

const setTimeStr = (time) => {
  if(String(time).length === 1){
    return '0' + time;
  }else{
    return time;
  }
}

const addTime = (a, b) => {
  const timeA = setTimeVariables(a);
  const timeB = setTimeVariables(b);

  let time = '';
  let hour = 0;
  let min = 0;
  let sec = timeA.sec + timeB.sec;


  if(sec > 60){
    min = Math.trunc( sec / 60 );
    sec = Math.trunc( sec % 60 );
  }

  min += timeA.min + timeB.min;
  if(min > 60){
    hour = Math.trunc( min / 60 );
    min = Math.trunc( min % 60 );
  }

  hour += timeA.hour + timeB.hour;
  if(hour === 0){
    hour = '00';
  }else{
    if(hour.length < 2) hour = '0' + hour;
  }

  time = setTimeStr(hour) + ':' + setTimeStr(min) + ':' + setTimeStr(sec);

  return time;
}

class Library{

  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
    // console.log('add play: ', this.playlists);
  }

  // getPlaylist(playlistId) {
  //   var play = this.playlists;
  //   var result = [];

  //   result.push(this.printPlay(play, playlistId));

  //   for(var i = 0; i < play[playlistId].tracks.length; i++){
  //     result.push(this.printTrack(this.tracks, play[playlistId].tracks[i]));

  //   }

  //   return result;
  // }

  // getPlaylists() {
  //   var play = this.playlists;
  //   var result = [];
  //   for (p in play){
  //       result.push(this.printPlay(play, p));
  //   }

  //   return result;
  // }

}

class Playlist{

  constructor(name){
    this.id = uid();
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  // console.log('add track: ', this.tracks);
  }

  getTracks() {
    var track = this.tracks;
    var result = [];
    for (t in track){
      result.push(this.printTrack(track, t))
    }
    return result;
  }

  overallRating(){
    let total = 0;

    this.tracks.forEach( track => {
      total += track.rating;
    });

    return total;
  }

  totalDuration(){
    let total = '00:00:00';

    this.tracks.forEach( track => {
      total = addTime(track.length, total);
    });

    return total;
  }
}
Playlist.prototype.toString = function(){
  return this.id + ': ' + this.name + ' - ' + this['tracks'].length + ' tracks';
}

class Track{

  constructor(title, rating, length){
    this.id = uid();
    this.title = title;
    this._rating = rating;
    this._length = length;
  }

  get rating(){ return this._rating }
  get length(){ return this._length }

}
Track.prototype.toString = function(){
  return this.id +': ' + this.title + ' rating: ' + this.rating + ' length ' + this.length;
}

const t01 = new Track("Code Monkey", 4, '04:50');
const t02 = new Track("Model View Controller", 3, '02:30');
const t03 = new Track("Four Thirty-Three", 5, '04:21');

const p01 = new Playlist("Coding Music");
const p02 = new Playlist("Other Playlist");
// debugger;
p01.addTrack(t01);
p01.addTrack(t02);
p02.addTrack(t03);

const l01 = new Library("test", "my");
l01.addPlaylist(p01);
l01.addPlaylist(p02);

// console.log(l01.getPlaylists());
// console.log(l01.getTracks());

// console.log(l01.getPlaylist(p01));
p01.addTrack(t03);
const t04 = new Track("What ever", 5, '04:22');
const p03 = new Playlist("Others");
p03.addTrack(t04);
l01.addPlaylist(p03);

console.log(`total rating for p01 is ${p01.overallRating()}`);
console.log(`total duration for p01 is ${p01.totalDuration()}`);
