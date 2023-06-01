import {useFadeIn} from "../hooks/useFadeIn";

export const FadeIn = () => {
    // const {elementWithFadeIn, style} = useFadeIn()
    const h3WithFadeIn = useFadeIn(7, 2)
    const pWithFadeIn = useFadeIn(5)
    return (
        <>
            {/*<h3 ref={ref} style={style}>Fade In</h3>*/}
            <h3 {...h3WithFadeIn}>Fade In h3</h3>
            <p {...pWithFadeIn}>Fade In p</p>

        </>
    )
}
