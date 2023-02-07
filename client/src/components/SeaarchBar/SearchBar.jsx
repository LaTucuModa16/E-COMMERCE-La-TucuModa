import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../../actions";

function SearchBar({ setCurrentPage, setFlagRefresh_ }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    setFlagRefresh_();
    setCurrentPage(1);
    e.preventDefault();
    if (name !== "") {
      dispatch(getProductsByName(name));
      setName("");
    } else {
      alert("Ingrese un nombre válido");
    }
  }

  return (
    <div>
      <input
        className="input1"
        value={name}
        type="text"
        placeholder="Qué estás buscando?"
        onChange={(e) => handleInputChange(e)}
      />
      <button className="m-2" type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
