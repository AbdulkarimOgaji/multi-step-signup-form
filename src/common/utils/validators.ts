export const validateEmail = (email: string) => {
  var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (pattern.test(email)) {
    return true;
  }
  return false;
};

export const validatePhone = (phone: string) => {
  const pattern = /^[a-zA-Z0-9\-().\s]{10,15}$/;

  if (pattern.test(phone)) {
    return true;
  }
  return false;
};
