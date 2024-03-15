import React from "react"
import { Vardas } from "./Vardas"
import { Tipas } from "./Tipas"
import { Spalva } from "./Spalva"

export const Vandenynas = () => {
    return (
        <div className="Component">
            <Vardas />
            <Tipas />
            <Spalva />
        </div>
    )
}