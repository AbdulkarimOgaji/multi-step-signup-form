export const validateEmail = (email: string) => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (pattern.test(email)) {
        return true;
    }
    return false
}


