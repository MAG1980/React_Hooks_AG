import {useFadeIn} from "../hooks/useFadeIn";

export const FadeIn = () => {
    // const {elementWithFadeIn, style} = useFadeIn()
    const h3WithFadeIn = useFadeIn()
    const pWithFadeIn = useFadeIn()
    return (
        <>
            {/*<h3 ref={ref} style={style}>Fade In</h3>*/}
            <h3 {...h3WithFadeIn}>Fade In h3</h3>
            <p {...pWithFadeIn}>Fade In p</p>

        </>
    )
}
