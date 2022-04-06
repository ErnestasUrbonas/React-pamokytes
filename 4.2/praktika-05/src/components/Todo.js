import React from 'react'
import { FaCheck, FaChevronRight } from "react-icons/fa";

export default function Todo(props) {
    let { id, text, status, changeStatus } = props;


    return (
        <>
            <div className={status ? "alert alert-success col-4" : "alert alert-warning col-4"} role="alert">
                {status ? <FaCheck /> : <FaChevronRight />}{text}
            </div>

            <div className='col-8'>
                <button onClick={() => changeStatus(id)} type="button" className="btn btn-light" >Check</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </>
    )
}
