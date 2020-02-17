module.exports = function createDreamTeam(arr) {
  throw 'Not implemented';
  // remove line with error and write your code here
 if (!Array.isArray(members)){
 return false;
}
 if (!Array.isArray(members)){
 return false;
}
let str = '';
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      str += members[i].trim()[0];
    }
  }
  return str.toUpperCase().split('').sort().join('');
};
