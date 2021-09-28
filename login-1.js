const btn2 = document.querySelector("#btn-2");

const login = JSON.parse(localStorage.getItem("form"));

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  var uname = document.getElementById("username").value;
  var upw = document.getElementById("userpw").value;

  console.log(login);

  var resultUser = login.find((data) => data.name === uname);
  console.log(resultUser);

  var resultPW = login.find((data) => data.pw === upw);
  console.log(resultPW);

  if (resultUser && resultPW) {
    location.href = "quiz-1.html";
    // location.href = "login.html";
  } else {
    alert("invalid");
  }
});
