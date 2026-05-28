export const checkValidData = (name, email, password) => {
  // 1. ONLY validate name if it is NOT null (Sign Up mode)
  if (name !== null) {
    const isNameValid = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/.test(name);
    if (!isNameValid) return "Name is not Valid";
  }
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isEmailValid) return "Email is not Valid";

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  if (!isPasswordValid) return "Password is not Valid";

  return null; // else
};
