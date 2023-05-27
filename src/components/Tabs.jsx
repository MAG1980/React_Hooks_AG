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
    const {tabNumber, buttonClickHandler}=useTabs(0)

    return (
        <>
            {content.map((section, sectionIndex) => (
                <button onClick={()=>buttonClickHandler(sectionIndex)}>{section.tab}</button>
            ))}
            <div>{content[tabNumber].content}</div>
        </>
    )
}