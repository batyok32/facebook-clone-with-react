import React from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import  AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NearMeIcon  from '@material-ui/icons/NearMe'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar alt={username} src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p><span>15</span> Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
