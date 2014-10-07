// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof(obj);
  console.log('tipo: '+type );
  var result = '';

  if(obj === null){
    console.log('null');
     result = ''+obj+'';
  }
  else if(type === 'boolean'){
    console.log('boolean');
     result = ''+obj+'';
  }
  else if(type === 'string'){
    result = '"'+obj+'"';
  }

  else if(type ==='number'){
    console.log('Number');
    result = ''+obj+'';
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

      for (var subKey in obj){
          
          
            items += '"' + subKey + '":';
            stringifyJSON(obj[subKey]);
            items += ',';
          
        }


    
       result = '{'+ items + '}';
  }


  return result;

};
