import React, {useState, useEffect, Suspense} from 'react'
import "./Feed.css"
import db from './firebase'
import PWAPrompt from 'react-ios-pwa-prompt'


const StoryReel = React.lazy(() => import("./StoryReel"))
const MessageSender = React.lazy(() => import("./MessageSender"))
const Post = React.lazy(() => import("./Post"))
// import StoryReel from "./StoryReel"
// import MessageSender from "./MessageSender"
// import Post from "./Post"

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot =>  (
            setPosts(snapshot.docs.map(doc => ({id:doc.id, data:doc.data() })))
        ))
    }, [])
    return (
        <div className='feed'>
            <Suspense fallback={<div>Loading...</div>}>
            <StoryReel />
            <MessageSender />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
             ) )}
            </Suspense>

            <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false}/>
        </div>
    )
}

export default Feed
