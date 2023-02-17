import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateUser, getUserByUsername } from "../../../../actions";
import { Link, useParams, useNavigate } from "react-router-dom"

export default function ClientBaned() {

    const dispatch = useDispatch();
    const { username } = useParams();
    const userId = useSelector((state) => state.userr)
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        last_name: "",
        username: "",
        email: "",
        is_banned: "",
    })

    useEffect(() => {
        dispatch(getUserByUsername(username))
    }, [username])

    useEffect(() => {
        setInput({
            name: userId?.map(e => e.name),
            username: userId?.map(e => e.username),
            is_banned: userId?.map(e => e.is_banned),
        })
    }, [userId])

    function handleInputChange(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateUser(input))
        alert("Recipe Created")
        setInput({
            is_banned: ""
        })
    }

    return (
        <div>
            <h1>ACTUALIZAR ESTADO DE BAN</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div className="">
                    <div className="">
                        <label className="">
                            Name
                        </label>
                        <input value={input.name} name="name" type="text" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="">
                        <label className="">
                            Username
                        </label>
                        <input value={input.username} name="username" type="text" placeholder="Doe" readOnly onChange={(e) => handleInputChange(e)} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <label className="">
                            Email
                        </label>
                        <input value={input.email} name="email" type="text" readOnly onChange={(e) => handleInputChange(e)} />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <label className="" >
                            Ban
                        </label>
                        <div className="">
                            <select value={input.is_banned} name="is_banned" onChange={(e) => handleInputChange(e)}>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>

                    </div>
                </div>
                <button type="submit" className="" >Actualizar</button>
            </form>
        </div >
    )
}