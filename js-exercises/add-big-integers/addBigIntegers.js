function addBigIntegers(intString) {
    let bigIntegerArray = intString.split("\n");
    let sum = "0";

    for (let i = 0; i < bigIntegerArray.length; i++) {
        sum = addStringNumbers(sum, bigIntegerArray[i].trim());
    }

    return sum;
}

function addStringNumbers(str1, str2) {

    let sumOfStrings = "";

    let str1Length = str1.length;
    let str2Length = str2.length;

    if (str2Length > str1Length) {
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }

    let carry = 0;
    let digit1;
    let digit2;
    let temp;
    let digitSum;
    for (let i = 0; i < str1.length; i++) {
        digit1 = parseInt(str1.charAt(str1.length - 1 - i)); //ith digit of string 1
        digit2 = parseInt(str2.charAt(str2.length - 1 - i)); //ith digit of string 2
        digit2 = (digit2) ? digit2 : 0;
        temp = (carry + digit1 + digit2).toString();
        digitSum = temp.charAt(temp.length - 1);
        carry = parseInt(temp.substr(0, temp.length - 1));
        carry = (carry) ? carry : 0;

        sumOfStrings = (i === str1.length - 1) ? temp + sumOfStrings : digitSum + sumOfStrings;

    }
    return sumOfStrings;

}

export { addBigIntegers };
