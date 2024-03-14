import React from "react"
import { seaPlaners } from "../Data/seaPlaners.js"

export const Bala = () => {
  return (
    <div className="Component">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>type</th>
            <th>name</th>
            <th>color</th>           
          </tr>
        </thead>
        <tbody>
            {seaPlaners.map((planer, index) => {
                return (
                    <tr key={planer.id}>
                    <td>{planer.id}</td>
                    <td>{planer.type}</td>
                    <td style={{ color: planer.color }}>{planer.name}</td>
                    <td>{planer.color}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}