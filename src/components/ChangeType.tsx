import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>( //Setting the state. SAQ (Short Answer Question) as Default Type
        "short_answer_question"
    );

    //Changes the State between SAQ and MCQ
    const changeType = () => {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    };

    //Display Text. Change if MCQ
    let displayText = "Short Answer";
    if (questionType === "multiple_choice_question") {
        displayText = "Multiple Choice";
    }

    //Render the button. It's a pretty cool button. It shows the displayText value and when clicked runs the changeType
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <p>{displayText}</p>
        </div>
    );
}
