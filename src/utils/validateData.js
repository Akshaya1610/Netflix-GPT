export const validateData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if (!isEmailValid) return "Email Id is not valid";
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
};

export const validateUserName = (name) => {
    const isNameValid =  /^[A-Za-z\s]*$/.test(name);
    
    if (!isNameValid) return "Full Name is not valid";
   
  
    return null;
};