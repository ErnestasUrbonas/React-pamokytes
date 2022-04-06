import React from 'react'
import PostContent from "./PostContent";
import { useState } from "react";
function PostList() {

    const data = [
        {
            id: 1,
            title: "HTML",
            content: "Aš mokausi HTML",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
            status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 2,
            title: "CSS",
            content: "Aš mokausi CSS",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ-YTbN2EUfz2BrkDJK6ZEcOXNb5oh7PZVQ&usqp=CAU",
            status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 3,
            title: "JS",
            content: "Aš mokausi JS",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLuPo6cc9u8tdoUsYUQ1ogqfF9X_lmKSkSw&usqp=CAU",
            status: false,
            changeStatus: { changeStatus }
        }
    ]
    const [posts, setPosts] = useState(data);

    function changeStatus(id) {
        const updatePosts = [...posts];
        updatePosts.forEach((post) => {
            if (post.id === id) {
                post.status = true;
            }
        });
        setPosts(updatePosts);
    }

    const postsList = posts.map(post => {
        return (
            <PostContent
                key={post.id}
                id={post.id}
                title={post.taskTitle}
                content={post.content}
                img={post.img}
                status={post.status}
                changeStatus={changeStatus}
            />
        );
    });
    return <div className='row'>{postsList.length ? postsList : "EMPTY :("}</div>;
}

export default PostList;