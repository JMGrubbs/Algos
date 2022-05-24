var reverse = function(x) {
    console.log(x)
    if(x<0){
        snum = x.toString().replace('-','')
        console.log(snum)
        snum = snum.split('').reverse().join('')
        console.log(snum)
        return snum-(snum*2)
    }else{
        return x.toString().split('').reverse().join('')
    }
};



console.log(reverse(-330932))