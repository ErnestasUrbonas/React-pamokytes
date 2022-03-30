import React, { useState } from 'react'

export default function Task() {
    const [task, setTask] = useState(false)

    return (
        <div className='col-4'>
            <div className='card' style={{ width: '18rem' }}>

                <div className='card-body'>
                    <h5 className='card-title'>{task ? "task is done" : "task is not done"}</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => setTask(true)} href="#" className={task ? "btn btn-success" : "btn btn-danger"}>{task ? "Done" : "Mark as done"}</button>
                </div>
            </div>

        </div>
    )
}
