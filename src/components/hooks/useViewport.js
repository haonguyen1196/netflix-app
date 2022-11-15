import { useEffect, useState } from "react";

function useViewport() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth || document.documentElement.clientWidth)

    
    useEffect(() => {
        const handleWindowWidth = () => {
            const width = window.innerWidth || document.documentElement.clientWidth
            setWindowWidth(width)
        }
    
        window.addEventListener('resize', handleWindowWidth)

    }, [])

    return windowWidth
}

export default useViewport; 