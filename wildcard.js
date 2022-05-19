let isMatch = function(s, p) {
    string =  s.split('')
    com =  p.split('')
    match = true
    let i = 0
    let j = 0
    while (i < string.length && match === true) {
        t1 = string[i]
        t2 = com[j]
        console.log(t1,'first')
        console.log(t2,'first')
        if (t2 === '*'){
            if (p === '*'){
                return true
            }

            if (t1 === com[j+1]){
                t2 = com[j+1]
                j += 1
                console.log(t2, 'new t2')
            }
            i += 1
        }  else if (t1 === t2){
            i += 1
            j += 1
        } else if (t2 === '?'){
            i += 1
            j += 1
        } else if (t1 !== t2){
            match = false
        }
        console.log(' ')
    }
    return match
};


let string1 = "adceb"
let match1 = "*a*b"
// let string2 = ['dsaadab']
// let match2 = ['*b']

console.log(isMatch(string1, match1))
// console.log(isMatch(string2, match2))