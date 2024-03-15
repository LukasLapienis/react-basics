import React from "react";
import { seaPlaners } from "../Data/seaPlaners"
import { Gyventojai } from "./Gyventojai"

export const Pasaulis = () => {
    return (
        <div className="Component">
            <Gyventojai data={seaPlaners} color="red"/>
        </div>
    )
}