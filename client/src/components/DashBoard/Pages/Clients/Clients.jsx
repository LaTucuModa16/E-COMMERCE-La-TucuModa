import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserByUsername, getUsers } from "../../../../actions";
import { Link, useParams } from "react-router-dom";
import NavBarDash from "../../NavBarDash/NavBarDash";

export default function Clients() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.users);
  console.log(allUser);
  const [userStatus, setUserStatus] = useState({});
  const [username, setUsername] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  function handleInputSearch(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    if (username) {
      dispatch(getUserByUsername(username));
      console.log(username);
    } else {
      alert("Username invalid");
    }
  }

  function handleToggleUser(user) {
    dispatch(toggleUser(user.id));
  }

  return (
    <div>
      <NavBarDash />
      <div className="containerDash colorLetras">
        <div className="d-flex justify-content-center p-5">
          <input
            className=""
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => handleInputSearch(e)}
          />
          <button
            className="mx-2"
            type="submit"
            onClick={(e) => handleSubmitSearch(e)}
          >
            Buscar
          </button>
        </div>
        <hr />
        <hr />
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-3 ">
            <h1 className="col">Nombre</h1>
            <h1 className="col">Usuario</h1>
            <h1 className="col">Mail </h1>
            <h1 className="col">Desactivado</h1>
          </div>
        </div>
        <hr />
        <hr />
        {allUser
          .filter((e) => e.name.toLowerCase().includes(username.toLowerCase()))
          .map((e) => {
            return (
              <div className="container text-center" key={e.id}>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-3 ">
                  <h4 className="col">{e.name}</h4>
                  <h4 className="col">{e.username}</h4>
                  <h4 className="col">{e.email} </h4>
                  <input
                    className="col"
                    type="checkbox"
                    checked={e.isActive}
                    onChange={() => handleToggleUser(e)}
                  />
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}
