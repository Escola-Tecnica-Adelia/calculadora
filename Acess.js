function SignIn(login, password){
  if (login === "adelia" && password === "matricula") {
    location.href = "./Screens/Home/index.html";
  } else {
    swal({
      icon: "error",
      content: {
        element: "p",
        attributes: {
          innerText: "Usuário ou senha está incorreto!",
          style: "color: black; font-size: 18px",
          className: "p",
        },
      },
    })
  }
}
