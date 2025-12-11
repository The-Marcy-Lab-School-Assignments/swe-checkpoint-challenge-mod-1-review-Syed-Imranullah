// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  return {
    username: username,
    email: email,
    isActive: true,
    loginCount: 0,
  };
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  return (user.loginCount += 1);
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  console.log(`username: ${user.username}`);
  console.log(`email: ${user.email}`);
  console.log(`isActive: ${user.isActive}`);
  console.log(`loginCount: ${user.loginCount}`);
};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  return {...user}
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
