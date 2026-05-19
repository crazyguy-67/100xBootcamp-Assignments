const roles = {
  admin: ["read", "write"],
  user: ["read"],
  staff: ["write"],
};

const checkRole = "user";
const action = "write";

const canPerform = roles[checkRole].includes(action);

console.log(canPerform);
