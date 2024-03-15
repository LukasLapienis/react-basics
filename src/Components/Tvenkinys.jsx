import React from "react";
import { Daiktas } from "./Daiktas"

export const Tvenkinys = () => {
    return (
        <div className="Component">
            <Daiktas filter="even" />
            <Daiktas filter="odd" />
        </div>
    )
}