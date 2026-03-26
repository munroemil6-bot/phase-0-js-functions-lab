function calculateTax(amount) {
    let tax = amount * 0.1;
    return tax;
}
function convertToUpperCase() {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
    const cleanedWord = word.replace(/[a-zA-Z0-9]/g, '').toLowerCase();
    const reversedWord = cleanedWord.split('').reverse.join('');
    return cleanedWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPecentage) {
    const discountAmount = (originalPrice * discountPecentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };