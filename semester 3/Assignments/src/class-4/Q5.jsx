import React, { useState } from 'react'

const LikeCount = ({ likes }) => {
    return <h4>Likes: {likes}</h4>
}

const LikeButton = ({ handleLike }) => {
    return <button onClick={handleLike}>Like</button>
}

const Q5 = () => {
    let [likes, setLikes] = useState(0)

    return (
        <div>
            <h3>Q5</h3>
            <LikeCount likes={likes} />
            <LikeButton handleLike={() => setLikes(likes + 1)} />
        </div>
    )
}

export default Q5
