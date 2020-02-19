module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let result = 1;
        if(Array.isArray(arr)){
            for(let item of arr){
                if(Array.isArray(item)){
                    result = Math.max(this.calculateDepth(item) +1, result)
                }
            }return result;
        }else return;
    }
};
