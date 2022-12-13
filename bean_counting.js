const countBs = string  => { 
    let Bs = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "B") Bs ++;
    }
    return Bs;
}

const countChar = (str, char) => {
    let ch = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] == char) ch++;
    }
    return ch;
}

console.log(countBs("BBC"))
console.log(countChar("kakakorke","a"))