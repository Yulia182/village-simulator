import { useEffect, useState } from 'react';
import './AlienInvasion.css'

interface Props {
    setResource(name: string, amount: number):void;
    resourceAmount(name: string): number;
    checkWin(): boolean;
    checkLose(): boolean;
    resources: string[];
}

const AlienInvasion = ({setResource, resourceAmount, resources, checkWin, checkLose}: Props) => {
    const [invasion, setInvasion] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
        if(!checkWin() && !checkLose()) {
            setInvasion(true);

            resources.forEach((resource) => {
                const lost = Math.floor(Math.random()*5);
                if(resourceAmount(resource)-lost > 0) {
                    setResource(resource, lost*-1)
                }
            })

            const timeoutId2 = setTimeout(() => {
                setInvasion(false);
            }, 5000);
            return () => clearTimeout(timeoutId2);
        }
    }, Math.floor(Math.random() * 100000))
    return () => clearTimeout(timeoutId);
  })
  return (
    <div style = {{display: invasion ? "block" : "none"}} className='AlienInvasion'>
        <img src="./src/assets/UFO.png" id="alien1" alt="" />
        <h2>ALIEN INVASION</h2>
    </div>
  )
};

export default AlienInvasion;
