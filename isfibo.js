function isPerfectSquare( x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}

function isFibonacci(n)
{
    return isPerfectSquare(5 * n * n + 4) ||
           isPerfectSquare(5 * n * n - 4);
}

console.log(isFibonacci(4))
