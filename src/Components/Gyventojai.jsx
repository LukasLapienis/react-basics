import React from "react";

export const Gyventojai = (props) => {
    const { data, color } = props;
    let matchingPlaners = [];

    data.forEach((planer) => {
        if (planer.color === color) {
            matchingPlaners.push(
                <div key={planer.id} style={{ color: planer.color }}>
                    name: {planer.name}
                </div>
            );
        }
    });

    if (matchingPlaners.length === 0) {
        return data.forEach((planer) => (
            <div key={planer.id} style={{ color: planer.color }}>
                name: {planer.name}
            </div>
        ));
    }

    return matchingPlaners;
};