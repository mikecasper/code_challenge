var decodeString = function(s) {
    let decodedStr = '', repeatCountStr = '';
    for (let i = 0; i < s.length ; i++)
    {
        let c = s.charAt(i);
        if (!isNaN(c)){
            repeatCountStr += c;
        }
        else if (c === '['){
            let openBrackets = 1;
            let j = i + 1;
            while (openBrackets > 0) {
                if (s.charAt(j) === '[')
                    openBrackets++;
                else if (s.charAt(j) === ']')
                    openBrackets--;
                j++;
            }
            let repeatStr = decodeString(s.substring(i+1,j-1));
            for (let j = 0; j < parseInt(repeatCountStr); j++) {
                decodedStr += repeatStr;
            }
            repeatCountStr = '';
            i = j-1;
        }
        else{
            decodedStr += c;
        }
    }
    return decodedStr;
};

console.log(decodeString("z1[y]zz3[ab2[c]a]"));