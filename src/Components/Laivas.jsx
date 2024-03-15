import React from "react";
import { seaPlaners } from "../Data/seaPlaners"

export const Laivas = () => {
    
    return seaPlaners.map((planer) => {
        if (planer.type === "car") {
            return (
            <div key={planer.id} style={{ display: "flex", gap: "5px"}}>
                name:
              <div style={{ color: planer.color }}>{planer.name}</div>
            </div>
            )
        } else return null
      })
}