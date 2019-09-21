import React from "react";
import "../styles/Button.css";

const loginPage = () => {
  return (
    <>
      <div>
        <label htmlFor="">
          Podaj Login <input type="text" />
          Podaj Hasło <input type="password" />
          <button className="buttonUniversal">Zaloguj</button>
        </label>
      </div>
    </>
  );
};

export default loginPage;
