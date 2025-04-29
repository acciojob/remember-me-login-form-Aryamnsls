document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  // Check if credentials are saved
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  }

  // Submit form
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    existingBtn.style.display =
      localStorage.getItem("username") && localStorage.getItem("password")
        ? "inline-block"
        : "none";
  });

  // Existing user login
  existingBtn.addEventListener("click", function () {
    const user = localStorage.getItem("username");
    if (user) {
      alert(`Logged in as ${user}`);
    }
  });
});
