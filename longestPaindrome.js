let longestPalindrome = function(s) {
    cur = ''
    curLen = 0
    let l = 0
    let r = 0
    for (let i in s){
        l=parseInt(i)
        r=parseInt(i)
        while(l >= 0 && r <= s.length && s[l] === s[r]){
            sub = s.substring(l,r+1)
            if(sub.length > curLen){
                curLen = sub.length
                cur = sub
            }
            l -= 1
            r += 1
        }
        l=parseInt(i)
        r=parseInt(i)+1
        while(l >= 0 && r <= s.length && s[l] === s[r]){
            sub = s.substring(l,r+1)
            if(sub.length >= curLen){
                curLen = sub.length
                cur = sub
            }
            l-=1
            r+=1
        }
    }
    return cur
};



string = "abacab"
console.log(longestPalindrome(string))