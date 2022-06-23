import { useEffect } from "react";

function Title(title) {
    useEffect (() => {
        document.title = "Mondino Tracker - " + title;
    }, []);
    return;
}

export default Title;