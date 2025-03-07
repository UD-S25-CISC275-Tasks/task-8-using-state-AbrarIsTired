import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Random Number Generator between 1 and 6 Inclusive
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(() => d6()); //Setting the States: Left. Uses D6 to set a random value

    const [rightDie, setRightDie] = useState<number>(() => {
        //Setting the States: Right. Sets the D6 Random to != the D6 Left
        let initial = d6();
        while (initial === leftDie) {
            //If D6 == Left D6 then reroll
            initial = d6();
        }
        return initial;
    });

    //Rolls the dice and updates the State
    const rollLeftDie = () => {
        setLeftDie(d6());
    };

    //Rolls the dice and updates the State
    const rollRightDie = () => {
        setRightDie(d6());
    };

    //Comparing Scores
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
