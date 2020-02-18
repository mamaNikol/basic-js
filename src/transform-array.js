module.exports = function transform(arr) {
function transform(arr ) {
	if(!Array.isArray(arr)){
		throw new Error();
	}
for(let item of arr){
	if(arr[item] === '--discard-next'){
		let index = arr.indexOf( '--discard-next');
   arr.splice(index,2);
     return arr;
	}if(arr[item] === '--discard-prev'){
		let index2 = arr.indexOf('--discard-prev');
		arr.splice(index2-1,2);
		return arr;
	}if(arr[item] === '--double-next'){
		let index3 = arr.indexOf('--double-next');
		arr.splice(index3,1,index3+1);
		return arr;
	}if(arr[item] === '--double-prev'){
		let index4 = arr.indexOf('--double-prev');
		arr.splice(index4,1,index4-0);
		return arr;
	}
}
   
};
