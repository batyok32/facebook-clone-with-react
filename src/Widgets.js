import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="https://instagram-clone-837d2.web.app/" 
                width="400"
                height='100%'
                style={{border:"none", overflow:"hidden"}}
                scrolling="yes"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
