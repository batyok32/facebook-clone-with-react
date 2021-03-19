import { Avatar } from '@material-ui/core'
import InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import React, { useState } from 'react'
import {storage} from "./firebase"
import db from "./firebase"
import "./MessageSender.css"
import { useStateValue } from './StateProvider';
import firebase from "firebase"
import { Button } from '@material-ui/core'


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (image) {
        	const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) *100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
            	console.log("Pocti")
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            message:input,
                            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                            profilePic:user.photoURL,
                            username:user.displayName,
                            image:url
                        })
                        setProgress(0);
                        setImage(null);
                        setInput("")
                        })
                    })
    }else{
            	console.log("Pocti")
                db.collection("posts").add({
                    message:input,
                    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                    profilePic:user.photoURL,
                    username:user.displayName,
                    image:""
                })
                setProgress(0);
                setImage(null);
                setInput("")
           
        }
    }
   
    
    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar className="messageSender__avatar" src={user.photoURL} />
                <progress className="messageSender__progress" value={progress} max="100" />

                <form>
                    <input className="messageSender__ainput" value={input} onChange={e => setInput(e.target.value)} className="messageSender__input" placeholder={`What is on your mind, ${user.displayName}?`}/>
                    <input className="messageSender__binput messageSender__input" placeholder='image Url(optional)' type="file" onChange={handleChange} />
                    <Button disabled={!input}  onClick={handleSubmit} type="submit">
                        Post
                    </Button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
