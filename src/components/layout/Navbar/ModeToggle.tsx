import React from "react";
import styled from "styled-components/macro";
import { usePersistentStore } from "src/store";
import useSound from "use-sound";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import switchOnSfx from "src/assets/sounds/switch-on.mp3";
import switchOffSfx from "src/assets/sounds/switch-off.mp3";

const Wrapper = styled.div`
  height: 2.4rem;

  .mode-toggle.react-toggle--checked .react-toggle-track {
    background-color: var(--mode-toggle-color);
  }

  .mode-toggle.react-toggle--checked:hover .react-toggle-track {
    background-color: var(--mode-toggle-color);
  }

  .mode-toggle.react-toggle:hover .react-toggle-track {
    background-color: var(--mode-toggle-color);
  }

  .mode-toggle .react-toggle-track-check {
    left: 5px;
  }

  .mode-toggle .react-toggle-track-x {
    right: 12px;
  }
`;

const Icon = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 1.6rem;
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
    <Wrapper>
      <Toggle
        icons={{
          checked: <Icon>🌜</Icon>,
          unchecked: <Icon>🌞</Icon>,
        }}
        className="mode-toggle"
        checked={mode === "dark"}
        onChange={toggleTheme}
      />
    </Wrapper>
  );
};
