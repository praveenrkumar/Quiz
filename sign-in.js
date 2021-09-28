const btn2 = document.querySelector("#btn-2");

btn2.addEventListener("click", () => {
  location.href = "login.html";
});

const btn = document.querySelector("#btn-1");

let forms = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let form = {
    name: document.getElementById("name").value,
    em: document.getElementById("em").value,
    pw: document.getElementById("pw").value,
  };
  forms.push(form);
  document.querySelector("form").reset();
  console.log("added", forms);

  localStorage.setItem("form", JSON.stringify(forms));

  if (form.name !== "" && form.em !== "" && form.pw !== "") {
    alert("Registered SuccessFully");
    // location.href = "login.html";
  } else {
    alert("To Be Filled");
  }
});
