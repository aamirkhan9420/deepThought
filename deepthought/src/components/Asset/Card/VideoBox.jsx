import React from 'react'

function VideoBox({ vdo }) {
    return (
        <div style={{ width: "100%" }}>
            <iframe
                title='trvdo'
                src={vdo}
                allowFullScreen
                width="100%"
                
            />
        </div>
    )
}

export default VideoBox