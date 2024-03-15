import React from "react"
import { seaPlaners } from "../Data/seaPlaners"
export const Daiktas = (props) => {
  const { filter } = props
  if (filter === "even") {
    return seaPlaners.map((planer) => {
      if (planer.id % 2 === 0) {
        return (
          <div key={planer.id} style={{ display: "flex", gap: "5px"}}>
            <div>id: {planer.id}</div>
            name: 
            <div style={{ color: planer.color }}>{planer.name}</div>
          </div>
        )
      } else return null
    })
  } else if (filter === "odd") {
    return seaPlaners.map((planer) => {
      if (planer.id % 2 !== 0) {
        return (
          <div key={planer.id} style={{ display: "flex", gap: "5px" }}>
            <div>id: {planer.id}</div>
            name:
            <div style={{ color: planer.color }}>{planer.name}</div>
          </div>
        )
      } else return null
    })
  }
}