import React, { useState } from "react";
import TheButton from "./TheButton";
import Character from "./Character";
import grass from "../unlockables/backgrounds/layered-waves-haikei.svg";

export default function GameContainer() {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="flex flex-col justify-end items-center py-10 bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${grass}` }}
    >
      <Character clicked={clicked} />
      <TheButton setClicked={setClicked} />
    </div>
  );
}
