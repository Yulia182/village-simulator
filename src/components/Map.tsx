import { useState } from 'react';
import Improvement from '../models/Improvement';
import './Map.css'
import Tile from './Tile';
import { Type } from '../models/ImprovementsArray';

interface Props {
    improvements: Improvement[];
    addImprovement(index: number, improvement: Type): void;
    editImprovement(index: number, improvement: Type, action: string): void
    checkImprovement(improvement: Type, which:string, level?:number, index?:number): boolean
}



const Map = ({improvements, addImprovement, editImprovement, checkImprovement}:Props) => {
    const [turn, setTurn] = useState(false);

    const takeTurn = ():void => {setTurn(true)}
    const endTurn = ():void => {setTurn(false)}
    const checkTurn = ():boolean => turn;
  return (
    <div className='Map'>
        {improvements.map((imp) => <Tile key={imp._id} improvement={imp} takeTurn={takeTurn} checkTurn={checkTurn} endTurn={endTurn}  addImprovement={addImprovement} editImprovement={editImprovement} checkImprovement={checkImprovement}/>)}
    </div>
  )
};

export default Map;
