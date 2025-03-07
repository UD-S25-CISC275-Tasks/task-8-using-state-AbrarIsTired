import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    //Setting the state. Setting it to false to be hidden
    const [isVisible, setIsVisible] = useState<boolean>(false);

    //Changes State to be True or in this case Visible
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    //Button which calls toggleVisibility. Is hiding the number 42 under it with <paragraph> </paragraph>
    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {isVisible && <p>42</p>}
        </div>
    );
}
