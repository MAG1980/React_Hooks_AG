import {useFullScreen} from "../hooks/useFullScreen";
import {useState} from "react";

export const UseFullScreenExample = () => {
    const onFulls = (isFull) => {
        console.log(`Полноэкранный режим ${isFull ? 'активен' : 'неактивен'}`)
    }
    const [fullscreenElement, triggerFullScreen, triggerMinimize] = useFullScreen(onFulls)

    return (
        <div>
            <div ref={fullscreenElement}>
                <img
                    src="http://pchdwallpaper.com/wp-content/uploads/plixpapers1502/megan_fox_wallpaper_background_17864-640x480.jpg"
                    alt="Megan Fox"/>
              <button onClick={triggerMinimize}>Exit full screen</button>
            </div>
            <button onClick={triggerFullScreen}>To full screen</button>
        </div>
    )
}