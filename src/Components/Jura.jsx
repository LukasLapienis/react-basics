import React from "react";
import { seaPlaners } from "../Data/seaPlaners"
import { Valtis } from "./Valtis";
import { Laivas } from "./Laivas"
import { Sala } from "./Sala"


const laivas = () => {
    return seaPlaners.map((planer) => {
        if (planer.type === "fish") {
            return (
            <p key={planer.id} style={{ color: planer.color }}>
                name: {planer.name}
            </p>

            )
        } else return null
      })
}

export const Jura = () => {
    return (
        <div className="Component">
            <Valtis />
            <Laivas />
            <Sala />
            {laivas()}
        </div>
    )
}