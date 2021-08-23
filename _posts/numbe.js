const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();


const paraMeter = +input;

for(let i = 1; i <= paraMeter; i++ ) {
  const star = '';
  for(let j = paraMeter - 1; j > 0; i-- ) {
    star =  j = i  ? ' ' : '*';
  }
}



