// What is the output of the below problem and why?

function createIncrement(){
  let count = 0 ;
  function increment(){
    count++
  }
  let message= `Count is ${count}`
  function log(){
    console.log(message);
  }

  return [increment,log]
}

const [increment,log] = createIncrement()
increment()
increment()
increment()
log()

// Count is 0 is logged 
// Because initially the count is 0,and it is getting incremented in the increment function so the count is printed as 0 because it is declared in the parent function scope and getting increment in one of the child function 


// Quick fix 

// function createIncrement(){
//   let count = 0 ;
//   let message;
//   function increment(){
//     count++
//  message=`Count is ${count}`
//   }

//   function log(){
//     console.log(message);
//   }

//   return [increment,log]
// }

// const [increment,log] = createIncrement()
// increment()
// increment()
// increment()
// log()