function isPalindrome(s: string): boolean {
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (!isLetterOrNumber(s.charAt(l))) {
            l++;
        } else if (!isLetterOrNumber(s.charAt(r))) {
            r--;
        } else if (s.charAt(l).toLowerCase() === s.charAt(r).toLowerCase()) {
            l++;
            r--;
        } else {
            return false;
        }
    }
    return true;
}

function isLetterOrNumber(ch) {
    return /[A-Za-z0-9]/.test(ch);
}