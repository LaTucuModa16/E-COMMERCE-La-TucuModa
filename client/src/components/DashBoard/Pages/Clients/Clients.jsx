import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../../actions";
import { Link, useParams } from "react-router-dom";


export default function Clients() {

    const dispatch = useDispatch();
    const allUser = useSelector((state) => state.users)
    console.log(allUser)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    function handleClick() {
        dispatch(getUsers());
    }

    return (
        <div>
            {allUser?.map(e => {
                return (
                    <div key={e.id}>
                        <h2>{e.name}</h2>
                        <h2>{e.username}</h2>
                        <h2>{e.email} </h2>
                    </div>
                )
            })}
        </div>
    )
}