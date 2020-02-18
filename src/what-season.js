module.exports = function getSeason(date ) {
  
 if(!date){
   	return  'Unable to determine the time of year!';
   }
   if (Object.keys(date).length > 0){
   	throw new Error();
   }
   let month = date.getMonth();
   let seasonsValue = {
   	winter : [11, 0, 1],
   	spring : [2,3,4],
   	summer: [5,6,7],
   	authumn: [8,9,10]
   };
   for(let season in seasonsValue){
   	if(seasonsValue[season].includes(month)){
   		return season;
   	}
   }
};
};
