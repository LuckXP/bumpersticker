
var part1Arr = ['MY', 'YOUR', 'SHARE THE','GIT R','INSURED BY','HONK IF YOU','I BELIEVE IN','ID RATHER BE','REAGAN THOUGHT','GOT','CAUTION','AMERICA','I BRAKE FOR','SOMETIMES MY STOMACH TELLS ME THAT','BEWILDERED','THE CONCAVITY OF', 'TELL','TAKE IT','WELL-BEHAVED','I 💖','THIS CAR CLIMBED','IF YOU SEE THIS','STAY','WATCH OUT','KEEP','GOD BLESS','SUPPORT','PROUD'];
var part2Arr = ['WEIRD', 'NOT','WORTH','JESUS FISH','US MARINE','HONOR STUDENT','COEXIST','GERMAN SHEPHERD','HONK','EVERYONE ELSE','AMERICA','YOUR UNCLE'];
var part3Arr = ['IS','LIBERAL MEDIA','YELLOW RIBBON','SIMPLE PEOPLE' 'LIKE AN','AND','LOVES','SMARTER THAN','FLUFFED','COEXISTS WITH','SLIPS ON','POKES HOLES IN',''];
var part4Arr = ['YOUR DOG', 'YOU','YOUR HONOR STUDENT','COEXIST','ON BOARD' 'THE GOVERNMENT','TEXAS','COCK','AN INCONVENIENT TRUTH','AMERICA','YOUR COUSINS MOUTH',''];
var part5Arr = ['\'16','Y2K','THINKS YOUR AN ASSHOLE','THE SLOWER I GO','COEXIST','#SOBLESSED','#GOGREEN','?','!','#THROWBACKTHURSDAY','FOR $$$'];

var part1 = part1Arr[Math.floor(Math.random()*part1Arr.length)];
var part2 = part2Arr[Math.floor(Math.random()*part2Arr.length)];
var part3 = part3Arr[Math.floor(Math.random()*part3Arr.length)];
var part4 = part4Arr[Math.floor(Math.random()*part4Arr.length)];
var part5 = part5Arr[Math.floor(Math.random()*part5Arr.length)];

var stickerArr = [];

var others = stickerArr.push(part1,part2,part3,part4,part5);

console.log(stickerArr.toLocaleString());