let myAtoi = function(s){
    s = s.trim()
    let holder = [0]
    let ret = 0
    let neg = 1
    for(let i in s){
        if(s[i] == '-' && i == 0){
            neg = -1
            continue;
        }else if(s[i] == '+' && i == 0){
            neg = 1
            continue;
        }
        if(/[a-zA-Z&\/\\#,+()$~%.'":*?<>{}' '-]/.test(s[i]) == true){
            if (i==0){
                    return 0
                }
            break;
        }else if(/[0-9]/.test(s[i]) == true){
            holder.push(s[i])
        }
    }
    ret=parseInt(holder.join(''))*neg
    if (ret >= 2147483648){
        return 2147483647
    }else if ( ret <= -2147483648){
        return -2147483648
    }
    return ret
}



console.log(myAtoi('49'))
console.log(myAtoi('-0005'))
console.log(myAtoi('0035'))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("3.14159"))
console.log(myAtoi("+1"))
