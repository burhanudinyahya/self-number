const from  = 1;
const to    = 5000;

const allNumbers     = [];
const notSelfNumbers = [];

for(let i = from; i <= to; i++){
    let b = i;
    b = b.toString();
    allNumbers.push(i);
    let lengthOfNumber = b.length;
    if(lengthOfNumber === 1){
        notSelfNumbers.push(
            i 
            + +b[0]
        );
    }else if(lengthOfNumber === 2){
        notSelfNumbers.push(
            i 
            + +b[0] 
            + +b[1]
        );
    }else if(lengthOfNumber === 3){
        notSelfNumbers.push(
            i 
            + +b[0]
            + +b[1]
            + +b[2]
        );
    }else if(lengthOfNumber === 4){
        notSelfNumbers.push(
            i 
            + +b[0]
            + +b[1]
            + +b[2]
            + +b[3]
        );
    }
}

const selfNumbers    = allNumbers.filter( num => notSelfNumbers.indexOf(num) <= -1 );
const sumSelfNumbers = selfNumbers.reduce( (sum, num) => sum+=num, 0 );

console.log(`Sum of all self-numbers: ${sumSelfNumbers}`);