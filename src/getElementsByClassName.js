// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result=[],
  	  getElementByClass = function (elements){
  	  	if (elements!==undefined){
  	  		var classList=elements.classList;
	  	  	if (elements.length){
	  	  		for (var i=0, size=elements.length; i<size; i++){
	  	  			if (elements[i].classList!==undefined){
	  	  				getElementByClass(elements[i]);
	  	  			}
	  	  		}
	  	  	}
	  	  	else {
	  	  		if (classList){
		  	  		if (classList.contains(className)) {
			  	  		result.push(elements);
			  	  	}
		  	  		getElementByClass(elements.childNodes); 		  	  			
	  	  		}
	  	  	}
	  	}
  };
  getElementByClass(document.body);
  return result;
};
