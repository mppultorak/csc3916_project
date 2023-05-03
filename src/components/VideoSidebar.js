import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ShareIcon from '@mui/icons-material/Share'
import Popup from './VideoPopup'

const VideoSidebar = ({likes, shares, messages}) => {
    const [liked, setLiked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                <BookmarkIcon fontSize="large" onClick = {() => setIsOpen(true)}/>
                <p>Upload</p>
                {isOpen ? <Popup closePopup={() => setIsOpen(false)}
                />: null}
            </div>
            <div className="videoSidebar__button">
                { liked ? <FavoriteIcon fontSize="large" onClick={e =>
                setLiked(false)} /> : <FavoriteBorderIcon fontSize="large"
                onClick={e => setLiked(true)} /> }
                <p>{liked ? +likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar