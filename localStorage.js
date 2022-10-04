const user = {
  firstName: "Fredrik",
  lastName: "Thelin",
  age: 40,
};

localStorage.setItem("user", JSON.stringify(user));

const fredrik = JSON.parse(localStorage.getItem("user"));

console.log(fredrik.firstName);
