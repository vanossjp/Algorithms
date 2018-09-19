function Reverse(obj) {
  let result = {};
  for (key in obj){
    if (!result[obj[key]]){
      result[obj[key]]=[key]
    } else {
      result [obj[key]].push(key)
    }
  }
}
return result;
