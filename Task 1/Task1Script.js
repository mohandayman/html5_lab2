window.addEventListener("load", function () {
  let btn = document.querySelector("#submit");
  let inputs = document.querySelectorAll("input");
  let result = document.getElementById("result");
  console.log(inputs);
  btn.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem("userName", inputs[0].value);
    localStorage.setItem("phone", inputs[1].value);
    localStorage.setItem("password", inputs[2].value);
    console.log(inputs[1].value);

    let userName = document.createElement(`div`);
    userName.innerHTML = `userName : ${localStorage.getItem("userName")}`;
    result.append(userName);
    let phone = document.createElement(`div`);
    phone.innerHTML = `phone : ${localStorage.getItem("phone")}`;
    result.append(phone);
    let password = document.createElement(`div`);
    password.innerHTML = `password : ${localStorage.getItem("password")}`;
    result.append(password);
  };
});
