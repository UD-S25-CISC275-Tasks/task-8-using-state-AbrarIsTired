import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4); //Two states. This is for # of Attempts. Default 4
    const [isInProgress, setIsInProgress] = useState<boolean>(false); // Another state for In Progress or NOT In Progress

    //StartQuiz. Reduces attempts by one if we have more then 0 attempts
    const startQuiz = () => {
        if (attempts > 0) {
            setIsInProgress(true);
            setAttempts(attempts - 1);
        }
    };
    //Stops quiz adjusts the State of Progress
    const stopQuiz = () => {
        setIsInProgress(false);
    };
    //Changes the state of Attempts to +1
    const useMulligan = () => {
        setAttempts(attempts + 1);
    };

    //Buttons to call each of the functions. More Google + Tome + AI lookup to help with how to intergrate this
    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={useMulligan} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
