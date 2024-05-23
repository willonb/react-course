import "./styles.css";
import { Team } from "./pattern/composition";

export default function TeamComposition() {
  return (
    <div className="team-container">
      <Team.Section />
      <Team.Content />
      <Team.Main />
    </div>
  )
}
