/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const matching = {
        ")":"(",
        "}":"{",
        "]":"[",
    }
    let s_arr = s.split("");
    let stack = [];
    if(s.length % 2 !== 0){
        return false;
    }else{
        for(let i = 0; i < s_arr.length; i++){
            if(s_arr[i] in matching){
                if(stack[stack.length-1] === matching[s_arr[i]]){
                    stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(s_arr[i]);
            }
        }
    }
    if(stack.length === 0){
        return true;
    }else{
        return false;
    }
    
    
    
};