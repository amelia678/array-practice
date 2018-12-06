var sum = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    const sum = ar.reduce( function(a, b) {
        return a + b;
    }, 0);
    return sum
}

console.log(simpleArraySum(sum));