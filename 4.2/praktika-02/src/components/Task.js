import React, { useState } from 'react'

export default function Task() {
    const [like, setLike] = useState(0)
    const [hate, setHate] = useState(0)

    return (
        <div className='col-4'>
            <div className='card' style={{ width: '18rem' }}>

                <div className='card-body'>
                    <img className='card-img-top' src="https://estnn.com/wp-content/uploads/2021/05/wowtbcsplash.jpg" alt="#" />
                    <h5 className='card-title'>Post</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => setLike(like + 1)} href="#" className='btn btn-success me-3'>Like {like}</button>
                    <button onClick={() => setHate(hate + 1)} href="#" className='btn btn-danger me-3'>Hate {hate}</button>
                    <button onClick={() => setHate(0) + setLike(0)} href="#" className='btn btn-primary'>Reset</button>
                </div>
            </div>

        </div>
    )
}
