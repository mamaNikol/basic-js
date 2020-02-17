module.exports = function createDreamTeam(arr) {
  throw 'Not implemented';
  // remove line with error and write your code here
  let result = [];
	for (let item of arr){
		result.push(item[0]);
	}return result.toUpperCase().sort().join();

}

};
