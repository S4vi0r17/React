import { useEffect, useState } from "react";

const Message = () => {

    const [coods, setcoods] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setcoods({ x, y })
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])


    return (
        <>
            <h3 className="text-center">User already exist</h3>
            <p className="text-center">{JSON.stringify(coods)}</p>
        </>
    )
}

export default Message
