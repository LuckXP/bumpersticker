
var part1Arr = ['MY', 'YOUR', 'TELL','TAKE IT','WELL-BEHAVED','I 💖','THIS CAR CLIMBED','IF YOU SEE THIS','STAY','WATCH OUT','KEEP','GOD BLESS','SUPPORT','PROUD'];
var part2Arr = ['WEIRD', 'NOT','WORTH','JESUS FISH','US MARINE','HONOR STUDENT','COEXIST','GERMAN SHEPHERD','HONKING','EVERYONE ELSE'];
var part3Arr = ['IS', 'LIKE AN','AND','LOVES','SMARTER THAN','COEXIST'];
var part4Arr = ['YOUR DOG', 'YOU','YOUR HONOR STUDENT','COEXIST','THE GOVERNMENT'];
var part5Arr = ['\'16','Y2K','THINKS YOUR AN ASSHOLE','THE SLOWER I GO','COEXIST'];

var part1 = part1Arr[Math.floor(Math.random()*part1Arr.length)];
var part2 = part2Arr[Math.floor(Math.random()*part2Arr.length)];
var part3 = part3Arr[Math.floor(Math.random()*part3Arr.length)];
var part4 = part4Arr[Math.floor(Math.random()*part4Arr.length)];
var part5 = part5Arr[Math.floor(Math.random()*part5Arr.length)];

var stickerArr = [];

var others = stickerArr.push(part1,part2,part3,part4,part5);

console.log(stickerArr.toLocaleString());