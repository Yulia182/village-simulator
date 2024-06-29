import { FormEvent, useState } from "react";
import "./AddImprovementDialog.css";
import { ImprovementsArray, Type } from "../models/ImprovementsArray";

interface Props {
  index: number;
  endTurn(): void;
  hideDialog(): void;
  addImprovement(index: number, improvement: Type): void;
  checkImprovement(
    improvement: Type,
    which: string,
    level?: number,
    index?: number
  ): boolean;
  terrain: string;
}

const AddImprovementDialog = ({
  index,
  endTurn,
  hideDialog,
  addImprovement,
  checkImprovement,
  terrain,
}: Props) => {
  const [type, setType] = useState<Type>(ImprovementsArray[0]);

  const submitListener = (e: FormEvent) => {
    e.preventDefault();
    addImprovement(index, type);
    endTurn();
    hideDialog();
  };

  return (
    <form className="AddImprovementDialog" onSubmit={submitListener}>
      <h2>Add Improvement</h2>
      <label>Terrain: {terrain}</label>
      <label htmlFor="types-of-improvements">Type: </label>
      <select
        name="types-of-improvements"
        id="types-of-improvements"
        onChange={(e) => {
          setType(
            ImprovementsArray[
              ImprovementsArray.findIndex((item) => {
                return item.type.toLocaleLowerCase() === e.target.value;
              })
            ]
          );
        }}
      >
        <option value="pyramid">Pyramid</option>
        <option value="aqueduct">Aqueduct</option>
        <option value="sphinks">Sphinks</option>
        <option value="market">Market</option>
        <option value="masonry">Masonry</option>
      </select>
      <label htmlFor="benefit">
        Benefit:{" "}
        <p>
          {type.benefit.amount} {type.benefit.resource}
        </p>
      </label>
      <label htmlFor="cost">
        Cost:{" "}
        {type.cost.map((item) => (
          <p>
            {item.amount} {item.resource}
          </p>
        ))}
      </label>
      <button
        type="button"
        id="cancel"
        onClick={() => {
          endTurn();
          hideDialog();
        }}
      >
        Cancel
      </button>
      <button id="add" disabled={checkImprovement(type, "add", 0, index)}>
        Add
      </button>
    </form>
  );
};

export default AddImprovementDialog;
