

function memoize(fn){
  let cache = new Map()
  return function(...args){
const key = args.toString()
console.log('fn called with ' + key);
console.log(cache);

if(cache.has(key)){
  return cache.get(key)
}
cache.set(key,fn(...args))
return cache.get(key)

  }
}



function add(...args){
  return args.reduce((acc,curr)=>{
    return acc+curr
  },0)
}



function time(fn){
  console.time();
  fn();
  console.timeEnd()

}

const memoizeAdd = memoize(add)

time(()=>{
  memoizeAdd(100,100)
})

time(()=>{
  memoizeAdd(100)
})


time(()=>{
  memoizeAdd(100,200)
})

time(()=>{
  memoizeAdd(100,100)
})

time(()=>{
  memoizeAdd(100,100)
})

time(()=>{
  memoizeAdd(100,100)
})
