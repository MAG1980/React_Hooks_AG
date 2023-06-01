import {useScroll} from "../hooks/useScroll";

export const UseScrollExample = () => {
    const {x,y} = useScroll()
    return (
        <>
            <h3 style={{
                position: "fixed",
                color: y > 100 ? 'blue' : 'red'
            }}
            >
                UseScroll
            </h3>
        </>
    )
}