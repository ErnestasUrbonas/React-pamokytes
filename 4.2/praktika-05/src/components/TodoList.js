import React, { useState } from 'react'
import Todo from './Todo';

export default function TodoList() {
    const data = [
        {
            id: 1,
            text: "Make a cake",
            status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 2,
            text: "No alcohol today",
            status: false,
            changeStatus: { changeStatus }
        },


        {
            id: 3,
            text: "Wear shirt that says 'LIFE'",
            status: false,
            changeStatus: { changeStatus }
        },

        {
            id: 4,
            text: "Sleep", status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 5,
            text: "Make TODO list",
            status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 6,
            text: "Look at list",
            status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 7,
            text: "PANIC!",
            status: false,
            changeStatus: { changeStatus }
        }
    ]

    const [tasks, setTasks] = useState(data)

    function changeStatus(id) {
        const updateTasks = [...tasks];

        updateTasks.forEach((task) => {
            if (task.id === id) {
                task.status = true;
            }
        });

        setTasks(updateTasks);
    }

    // function deleteToDo() {
    //     const
    // }

    const tasksList = tasks.map(task => {
        return (
            <Todo
                key={task.id}
                id={task.id}
                text={task.text}
                status={task.status}
                changeStatus={changeStatus}
            />
        );
    });

    return <div className='row'>{tasksList.length ? tasksList : "EMPTY :("}</div>;
}
