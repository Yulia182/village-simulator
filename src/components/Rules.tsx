import { useState } from "react";
import "./Rules.css";

const Rules = () => {
  const [hidden, setHidden] = useState(true);
  const displayRules = () => {
    setHidden(!hidden);
  };
  return (
    <div className="Rules">
      <button onClick={displayRules}>{hidden ? "See the" : "Hide"} Rules</button>
      <ol className={hidden ? "hidden" : ""}>
        <li>Click on a cell to choose your improvement.</li>
        <li>
          Each improvement provides a specific resource, but has a cost in other
          resources.
        </li>
        <li>
          Note that certain improvements can only be placed in certain
          locations. Different colors on the grid represent those locations.
        </li>
        <li>
          After adding an improvement, you can upgrade it up to three levels,
          downgrade it or remove it. Upgrade cost the same as adding an
          improvement. When you downgrade or remove, you receive one resource
          less than it cost you to purchase it.
        </li>
        <li>You could, at any point, encounter an alien invasion. 
          The Aliens will take 0-5 of your resources on each invasion. </li>
        <li>If there is no possible moves left, you lose the game.</li>
        <li>If you obtain 20 people, you win the game.</li>
      </ol>
    </div>
  );
};

export default Rules;
