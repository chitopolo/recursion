// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof(obj);
  
  if(type === 'number'|| obj === null || type === 'boolean'){
  console.log('valor: '+ obj + ' typo: ' + type + ' Valor final: '+ String(""+obj+""));
  	var result = String(''+obj+''); 

  	return result;
  }else if(type === "string"){
  	var result = String('"'+obj+'"');
  	return result; 
  }
  else if(type === 'object'){
  	var result = String(''+obj+''); 
  	console.log('valor: '+ obj + ' typo: ' + type + ' Valor final: '+ String(""+obj+""));
  	return result;
  }
};
