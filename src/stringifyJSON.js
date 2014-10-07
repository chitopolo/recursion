// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof(obj);
  var result = '';
  if(obj === null || type === 'boolean' || type ==='number') result = ''+obj+'';
  else if(type === 'string'){
    result = '"'+obj+'"';
  }
  else if(Array.isArray(obj)){
    console.log('length: '+obj.length);
    if(obj.length<1){
      result = '[]';
    }else{
      var items = [];
      for(var num in obj){
        items.push(stringifyJSON(obj[num]));
      }
      result = '['+ items + ']';
    }
  }else{
    var items = [];
    var count = 0;
    for (var subKey in obj){
      if(obj.hasOwnProperty(subKey)) ++count ;
      if(isStringifiable(obj[subKey])){
        if(count>1) items += ',' ;
        items += '"' + subKey + '":';
        items += stringifyJSON(obj[subKey]);
      }
    }
    result = '{'+ items + '}';
  }
  function isStringifiable(value) {
    return typeof value !== 'undefined' && typeof value !== 'function';
  }
  return result;
};
