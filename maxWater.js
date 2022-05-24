
let maxArea = function(height) {
    var ret = 0;
    var i = 0;
    var j = height.length-1;
    while (i<j){
        l = (height[i] > height[j] ? height[j]: height[i])*(j-i);
        ret < l ? ret = l:null;
        height[i]>height[j]?j--:i++;
    }
    return ret;
};

h = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(h))