import React from 'react'

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="animate-spin mx-auto border-t-8 border-b-8 border-blue-800 rounded-full h-8 w-8"></div>
        </div>
    )
}

export default Loading