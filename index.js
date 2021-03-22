const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usersList = document.getElementById("users_list");
const addUserBtn = document.getElementById("add_user");
const delUserBtn = document.getElementById("delete_user");
const updateUserBtn = document.getElementById("update_user");
const viewUserBtn = document.getElementById("view_user");

const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
let users = JSONToUser || [];

console.log(users);

class User {
  id;
  name;
  email;

  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// showUsers();

addUserBtn.addEventListener("click", function () {
  const user = new User(Date.now(), nameInput.value, emailInput.value);
  users.push(user);
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
});

delUserBtn.addEventListener("click", function () {
  users = users.filter((user) => user.email != emailInput.value);
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
});

updateUserBtn.addEventListener("click", function () {
  user = users.map((user) => {
    if (user.email == emailInput.value) {
      user.name = nameInput.value;
    }
  });
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
});

viewUserBtn.addEventListener("click", function () {
  showUsers();
});

function showUsers() {
  const userStorage = localStorage.getItem("users");
  const JSONToUser = JSON.parse(userStorage);
  for (let i = 0; i < JSONToUser.length; i++) {
    const liItem = document.createElement("li");
    // liItem.textContent = JSONToUser[i].name + " ( " + JSONToUser[i].email + " )";
    liItem.textContent = `${JSONToUser[i].name} ( ${JSONToUser[i].email})`;
    usersList.appendChild(liItem);
  }
}
