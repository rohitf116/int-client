import React, { useContext } from "react";

const Login = () => {
  const handleConsentButtonClick = () => {
    fetch("http://localhost:3000/oauth", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        // Redirect the user to the OAuth consent screen
        window.location.href = data.url;
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <h1>Hello, OAuth!</h1>
      <button onClick={handleConsentButtonClick}>Show Consent Screen</button>
    </div>
  );
};

export default Login;
