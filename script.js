// JAVASCRIPT FILE (script.js)
const registeredUsers = [
  { id: "user1", email: "user@example.com", phone: "1234567890", password: "pass123" },
  { id: "user2", email: "test@domain.com", phone: "9876543210", password: "testpass" }
];

function handleLogin() {
  const input = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!input || !password) {
    alert("Please fill in both fields.");
    return;
  }

  const user = registeredUsers.find(
    (u) => (u.email === input || u.phone === input) && u.password === password
  );

  if (user) {
    alert("Welcome, " + user.id + "!");
  } else {
    alert("Invalid credentials. Please try again.");
  }
}