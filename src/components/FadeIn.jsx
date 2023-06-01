import {useFadeIn} from "../hooks/useFadeIn";

export const FadeIn = () => {
    // const {elementWithFadeIn, style} = useFadeIn()
    const elementWithFadeIn = useFadeIn()
    console.log(elementWithFadeIn)
    const {ref, style} = elementWithFadeIn
    return (
        <>
            {/*<h3 ref={ref} style={style}>Fade In</h3>*/}
            <h3 {...elementWithFadeIn}>Fade In</h3>
        </>
    )
}
