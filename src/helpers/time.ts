import { Song } from "../shared";

export function secondsAddToString(songs:Song) {
    let timeAdd = 0;
    songs.songs.forEach((time)=>{
        timeAdd += Number(time.duration_ms);
    });
    let time = Number(timeAdd)/1000;
    console.log(time)
    let hour:string|number = Math.floor(time / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    let minute:string|number = Math.floor((time / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second:string|number = time % 60;
    second = (second < 10)? '0' + second.toFixed() : second.toFixed();
    return  hour + ':' + minute + ':' + second;
  }

 export function secondsToString(seconds:string) {
    let time = Number(seconds)/1000;
    let minute:string|number = Math.floor((time / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second:string|number = time % 60;
    second = (second < 10)? '0' + second.toFixed() : second.toFixed();
    return  minute + ':' + second;
  }