import React from "react";
import styled from "styled-components/macro";
import { usePersistentStore } from "src/store";
import useSound from "use-sound";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import switchOnSfx from "src/assets/sounds/switch-on.mp3";
import switchOffSfx from "src/assets/sounds/switch-off.mp3";

const Icon = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 16px;
`;

export const ModeToggle: React.FC = () => {
  const { mode, setMode, soundEnabled } = usePersistentStore();
  const [playSwitchOn] = useSound(switchOnSfx, { soundEnabled });
  const [playSwitchOff] = useSound(switchOffSfx, { soundEnabled });

  const toggleTheme = () => {
    if (mode === "dark") {
      playSwitchOn();
      setMode("light");
    } else {
      playSwitchOff();
      setMode("dark");
    }
  };

  return (
    <Toggle
      icons={{
        checked: <Icon>🌜</Icon>,
        unchecked: <Icon>🌞</Icon>,
      }}
      className="mode-toggle"
      checked={mode === "dark"}
      onChange={toggleTheme}
    />
  );
};
