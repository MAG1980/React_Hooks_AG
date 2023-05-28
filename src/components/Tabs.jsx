import {useState} from "react";
import {useTabs} from "../hooks/useTabs";

const content = [
    {
        tab: "Раздел 1",
        content: "Контент раздела 1"
    },
    {
        tab: "Раздел 2",
        content: "Контент раздела 2"
    },
    {
        tab: "Раздел 3",
        content: "Контент раздела 3"
    }
]
export const Tabs = () => {
    const {currentTab, buttonClickHandler}=useTabs(0, content)

    return (
        <>
            {content.map((section, sectionIndex) => (
                <button onClick={()=>buttonClickHandler(sectionIndex)}>{section.tab}</button>
            ))}
            <div>{currentTab.content}</div>
        </>
    )
}