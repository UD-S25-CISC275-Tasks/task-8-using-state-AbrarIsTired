import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Dice Roll
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Sets the State. For Left and Right
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    const rollLeftDie = () => {
        // Call d6() for Left State
        setLeftDie(d6());
    };

    const rollRightDie = () => {
        // Call d6() for Right State
        setRightDie(d6());
    };

    // Comparing the Values
    let gameMessage = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            gameMessage = "Lose: Snake Eyes!";
        } else {
            gameMessage = "Win: Matching Dice!";
        }
    }

    return (
        <div className="text-center space-y-4">
            <div className="space-x-4">
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            <div className="text-xl font-bold space-x-4">
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            {gameMessage && (
                <div className="mt-4 text-lg font-semibold">{gameMessage}</div>
            )}
        </div>
    );
}
