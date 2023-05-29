import {useHover} from "../hooks/useHover";

export const HoveredTitle = () => {
    const onHover = () => {
        console.log('hover')
    }

    const hoveredTitle = useHover(onHover)

    return <h3 ref={hoveredTitle}>Hovered Title</h3>

}
