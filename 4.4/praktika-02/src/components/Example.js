import React from 'react'

export default function Example() {


    // delete (item)
    // const data = this.state.data.filter(i => i.id !== item.id)
    // this.setState({ data })



    Example()
    const listItem = this.state.data.map((item) => {
        return <div key={item.id}>
            <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button>
        </div>
    })
    return <div>
        {listItem}
    </div>


}