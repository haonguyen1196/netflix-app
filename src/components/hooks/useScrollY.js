import { useEffect, useState } from "react"

function useScrollY() {
    const [scrollY, setScrollY] = useState(false)

    useEffect(() => {
        const handleScrollY = () => {
            setScrollY(window.scrollY)
            // if(window.scrollY > 50) {
            //     setScrollY(true)
            // } else {
            //     setScrollY(false)   
            // }
        }
        window.addEventListener('scroll', handleScrollY)
    }, [])

    return scrollY
}

export default useScrollY;