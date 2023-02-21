import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateUser } from "../../../../actions";
import { useParams, useNavigate } from "react-router-dom"

export default function ClientBaned() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const userId = useSelector((state) => state.userr)
    const navigate = useNavigate();
    const [input, setInput] = useState({
        is_banned: "",
        is_admin: ""
    })

    useEffect(() => {
        setInput({
            is_banned: userId?.map(e => e.is_banned).toString(),
            is_admin: userId?.map(e => e.is_admin).toString(),
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
        dispatch(updateUser(id, input))
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
                        <label className="" >
                            Ban
                        </label>
                        <div className="">
                            <select value={input.is_banned} name="is_banned" onChange={(e) => handleInputChange(e)}>
                                <option>isBaned</option>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="">
                        <label className="" >
                            ADMIN
                        </label>
                        <div className="">
                            <select value={input.is_admin} name="is_admin" onChange={(e) => handleInputChange(e)}>
                                <option>isAdmin</option>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button type="submit" className="" >Actualizar</button>
            </form>
        </div >
    )
}