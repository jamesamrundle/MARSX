var value = "2009-06-15T13:45:30"

var map = "YYYY-MM-DDTXX:XX:XX"

console.log(value);

console.log(map.length)

yIndicies=[];
mIndicies=[];
dIndicies=[];

for(var i = 0;i<map.length;i++){
  switch (map[i]){
    case "Y":
  yIndicies.push(i)
  break
  case "M":
  mIndicies.push(i)
  break
  case "D":
  dIndicies.push(i)
  break
  }
}

sesardate = "YYYY-MM-DD"
console.log("y",yIndicies)
console.log("m",mIndicies)
console.log("d",dIndicies)

for( y in yIndicies){
      //console.log(value[y]
        sesardate = sesardate.replace("Y",value[yIndicies[y]])
}

for( d in dIndicies){
      console.log(dIndicies[d])
      sesardate= sesardate.replace("D",value[dIndicies[d]])
      //console.log(value[d])
      
}

for( m in mIndicies){
    
      sesardate= sesardate.replace("M",value[mIndicies[m]])
      //console.log(value[d])
      
}
console.log(sesardate)
