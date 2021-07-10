async function sendData(...args) {
  let [e, email, password, setError, name, logReg] = args;
  e.preventDefault();
  if (logReg === true) {
    console.log("Авторизация");
    let response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.status === 400) {
      response = await response.json();
      setError(response.message);
    }
    if (response.status === 200) {
      console.log("Авторизация выполнена успешно");
    }
  } else {
    console.log("Регистрация");
    let response = await fetch("http://localhost:4000/api/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    if (response.status === 400) {
      response = await response.json();
      setError(response.message);
    }
    if (response.status === 200) {
      console.log("Авторизация выполнена успешно");
    }
  }
}

export default sendData;
