import { useState } from "react";

import "./App.css";
import ResourcesView from "./components/ResourcesView";
import Map from "./components/Map";
import Resource from "./models/Resource";
import Improvement from "./models/Improvement";
import { ImprovementsArray, Type } from "./models/ImprovementsArray";
import { TerrainImprovements } from "./models/Terrain";
import Rules from "./components/Rules";
import AlienInvasion from "./components/AlienInvasion";

const Terrains = [
  "Forest",
  "Desert",
  "Oasis",
  "Mountains",
  "Coast",
  "Sand Dunes",
];

const Resources = [
  "People",
  "Papyrus",
  "Fish",
  "Bricks",
  "Water"
]

function App() {
  const [people, setPeople] = useState<Resource>({ name: "People", amount: 5 });
  const [papyrus, setPapyrus] = useState<Resource>({
    name: "Papyrus",
    amount: 10,
  });
  const [fish, setFish] = useState<Resource>({ name: "Fish", amount: 2 });
  const [bricks, setBricks] = useState<Resource>({ name: "Bricks", amount: 10 });
  const [water, setWater] = useState<Resource>({ name: "Water", amount: 10 });

  const [improvements, setImprovements] = useState<Improvement[]>(
    Array.apply(null, Array(25)).map((el, i) => {
      return {
        _id: i,
        type: "empty",
        level: 0,
        terrain: Terrains[Math.floor(Math.random() * 6)],
      };
    })
  );

  const setResource = (name: string, amount: number) => {
    if (name.toLocaleLowerCase() === "people") {
      setPeople({
        name: people.name,
        amount: people.amount + amount,
      });
    } else if (name.toLocaleLowerCase() === "papyrus") {
      setPapyrus({
        name: papyrus.name,
        amount: papyrus.amount + amount,
      });
    } else if (name.toLocaleLowerCase() === "fish") {
      setFish({
        name: fish.name,
        amount: fish.amount + amount,
      });
    } else if (name.toLocaleLowerCase() === "bricks") {
      setBricks({
        name: bricks.name,
        amount: bricks.amount + amount,
      });
    } else if (name.toLocaleLowerCase() === "water") {
      setWater({
        name: water.name,
        amount: water.amount + amount,
      });
    }
  };

  const addImprovement = (index: number, improvement: Type): void => {
    setImprovements([
      ...improvements.slice(0, index),
      {
        _id: index,
        type: improvement.type,
        level: 1,
        terrain: improvements[index].terrain,
      },
      ...improvements.slice(index + 1),
    ]);

    setResource(improvement.benefit.resource, improvement.benefit.amount);
    improvement.cost.forEach((c) => {
      setResource(c.resource, c.amount * -1);
    });
  };

  const resourceAmount = (name: string): number => {
    if (name.toLocaleLowerCase() === "people") {
      return people.amount;
    } else if (name.toLocaleLowerCase() === "papyrus") {
      return papyrus.amount;
    } else if (name.toLocaleLowerCase() === "fish") {
      return fish.amount;
    } else if (name.toLocaleLowerCase() === "bricks") {
      return bricks.amount;
    } else if (name.toLocaleLowerCase() === "water") {
      return water.amount;
    }
    return 0;
  };

  const checkImprovement = (
    improvement: Type,
    which: string,
    level?: number,
    index: number = 0
  ): boolean => {
    // console.log(improvement);
    if (
      which === "add" &&
      (improvement.cost.find((c) => {
        return c.amount > resourceAmount(c.resource);
      }) ||
        !TerrainImprovements[
          TerrainImprovements.findIndex(
            (t) => t.name === improvements[index].terrain
          )
        ].improvements.find((i) => i === improvement.type))
    ) {
      return true;
    } else if (which === "add" && level && level >= 3) {
      return true;
    } else if (
      which === "down" &&
      improvement.benefit.amount > resourceAmount(improvement.benefit.resource)
    ) {
      return true;
    } else if (
      which === "remove" &&
      level &&
      improvement.benefit.amount * level >
        resourceAmount(improvement.benefit.resource)
    ) {
      return true;
    }
    return false;
  };

  const editImprovement = (
    index: number,
    improvement: Type,
    action: string
  ): void => {
    if (action === "upgrade") {
      setImprovements([
        ...improvements.slice(0, index),
        {
          _id: index,
          type: improvement.type,
          level: improvements[index].level + 1,
          terrain: improvements[index].terrain,
        },
        ...improvements.slice(index + 1),
      ]);
      setResource(improvement.benefit.resource, improvement.benefit.amount);
      improvement.cost.forEach((c) => {
        setResource(c.resource, c.amount * -1);
      });
    } else if (action === "downgrade" && improvements[index].level > 1) {
      setImprovements([
        ...improvements.slice(0, index),
        {
          _id: index,
          type: improvement.type,
          level: improvements[index].level - 1,
          terrain: improvements[index].terrain,
        },
        ...improvements.slice(index + 1),
      ]);
      setResource(
        improvement.benefit.resource,
        improvement.benefit.amount * -1
      );
      improvement.cost.forEach((c) => {
        setResource(c.resource, c.amount - 1);
      });
    } else {
      setResource(
        improvement.benefit.resource,
        improvement.benefit.amount * -1 * improvements[index].level
      );
      improvement.cost.forEach((c) => {
        setResource(c.resource, (c.amount - 1) * improvements[index].level);
      });
      setImprovements([
        ...improvements.slice(0, index),
        {
          _id: index,
          type: "empty",
          level: 0,
          terrain: improvements[index].terrain,
        },
        ...improvements.slice(index + 1),
      ]);
    }
  };

  const checkLose = () => {
    if (
      ImprovementsArray.find((move) => {
        return (
          move.benefit.amount <= resourceAmount(move.benefit.resource) ||
          move.cost.find((c) => {
            return c.amount <= resourceAmount(c.resource);
          })
        );
      })
    ) {
      return false;
    }
    return true;
  };
  // const checkLose = () => {
  //   return !improvements.find((tile) => {
  //     if(tile.type === "empty") {
  //         const debug = TerrainImprovements.find((t) => t.name === tile.terrain)?.improvements.find((j) => {
  //           const i = ImprovementsArray.findIndex((type) => type.type.toLocaleLowerCase() === j.toLocaleLowerCase())
  //           return !(checkImprovement(ImprovementsArray[i], "add", tile.level, tile._id) && checkImprovement(ImprovementsArray[i], "down", tile.level, tile._id) && checkImprovement(ImprovementsArray[i], "remove", tile.level, tile._id))
  //         })
  //         console.log(tile._id)
  //         console.log(debug);
  //         return debug;
  //     }else {
  //       const imp = ImprovementsArray.findIndex((type) => type.type === tile.type)
  //       return !checkImprovement(ImprovementsArray[imp], "add", tile.level, tile._id) || !checkImprovement(ImprovementsArray[imp], "down", tile.level, tile._id) || !checkImprovement(ImprovementsArray[imp], "remove", tile.level, tile._id);
  //     }
  //   })
  // }
  const checkWin = () => {
    if(people.amount >= 20) {
      return true;
    }else {
      return false;
    }
  }

  return (
    <>
      <div className="App">
        <header>
          <h1>Ancient Village Simulator</h1>
        </header>
        <main>
          <AlienInvasion setResource={setResource} resourceAmount = {resourceAmount} resources={Resources} checkWin={checkWin} checkLose={checkLose}/>
          <Rules />
          <ResourcesView
            people={people}
            papyrus={papyrus}
            fish={fish}
            bricks={bricks}
            water={water}
          />
          <Map
            improvements={improvements}
            addImprovement={addImprovement}
            editImprovement={editImprovement}
            checkImprovement={checkImprovement}
          />
          <div
            style={{ display: checkLose() ? "block" : "none" }}
            className="lose-message"
          >
            <form>
              <p>You Lose!</p>
              <button>Try again</button>
            </form>
          </div>
          <div
            style={{ display: checkWin() ? "block" : "none" }}
            className="win-message"
          >
            <form>
              <p>You Won!</p>
              <button>Play again</button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
