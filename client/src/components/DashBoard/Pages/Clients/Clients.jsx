import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserByUsername, getUsers } from "../../../../actions";
import { Link, useParams } from "react-router-dom";


export default function Clients() {

    const dispatch = useDispatch();
    const allUser = useSelector((state) => state.users)
    console.log(allUser)
    const [userStatus, setUserStatus] = useState({});
    const [username, setUsername] = useState("");

    useEffect(() => {

        dispatch(getUsers())
    }, [dispatch])



    function handleInputSearch(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }

    function handleSubmitSearch(e) {
        e.preventDefault();
        if (username) {
            dispatch(getUserByUsername(username));
            console.log(username)
        } else {
            alert("Username invalid")
        }

    }

    function handleToggleUser(user) {
        dispatch(toggleUser(user.id));
    }

    return (
        <div>
            <div>
                <input
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => handleInputSearch(e)}
                />
                <button type="submit" onClick={(e) => handleSubmitSearch(e)}>Buscar</button>
            </div>
            {
                allUser.filter(e => e.name.toLowerCase().includes(username.toLowerCase())).map(e => {
                    return (
                        <div key={e.id}>
                            <h2>{e.name}</h2>
                            <h2>{e.username}</h2>
                            <h2>{e.email} </h2>
                            <input
                                type="checkbox"
                                checked={e.isActive}
                                onChange={() => handleToggleUser(e)}
                            />
                        </div>
                    )
                })
            }
        </div >
    )
}