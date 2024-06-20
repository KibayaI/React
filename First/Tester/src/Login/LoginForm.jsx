import React, { useState } from "react";

export default function LoginForm() {
  function emailCheck(event) {
    const value = event.target.value;
    setEmail(value);
    setIsButtonDisabled(value === "" || pass.length < 7);
    setErr("")
  }

  function passCheck(event) {
    const { value } = event.target;
    setPass(value);
    setIsButtonDisabled(value.length < 7 || email === "");
    setErr("");
  }

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState();


  const credentials = {
    email: "qwe",
    password: "1234567",
  };

  function submit() {
    if (
      email.toLowerCase() == credentials.email.toLowerCase() &&
      pass.toLowerCase() == credentials.password.toLowerCase()
    ) {
      alert("Login Successful!!!");
    } else {
      setErr("Login Failed!!!")
    }
  }
  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input onChange={emailCheck} id={"email"} type={"email"} />
      </div>
      <br />
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input onChange={passCheck} id={"password"} type={"password"} />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage">{err}</div>

      <div className="button">
        <button onClick={submit} disabled={isButtonDisabled}>
          Login
        </button>
      </div>
    </div>
  );
}
