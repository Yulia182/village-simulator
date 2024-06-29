import Resource from "../models/Resource";
import ResourceLine from "./ResourceLine";
import "./ResourcesView.css";

interface Props {
  people: Resource;
  papyrus: Resource;
  fish: Resource;
  bricks: Resource;
  water: Resource;
}

const ResourcesView = ({ people, papyrus, fish, bricks, water }: Props) => {
  return (
    <table className="ResourcesView">
      <thead>
        <tr>
          <th>Resource</th>
          <th>Available</th>
        </tr>
      </thead>
      <tbody>
        <ResourceLine resource={people} />
        <ResourceLine resource={papyrus} />
        <ResourceLine resource={fish} />
        <ResourceLine resource={bricks} />
        <ResourceLine resource={water} />
      </tbody>
    </table>
  );
};

export default ResourcesView;
