import React from "react";
import { usePersistentStore } from "src/store";
import useSound from "use-sound";
import switchOnSfx from "src/assets/sounds/switch-on.mp3";
import switchOffSfx from "src/assets/sounds/switch-off.mp3";
import { FaSun } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { ToggleWrapper } from "src/components/layout/Navbar/ToggleWrapper";

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
    <ToggleWrapper onClick={toggleTheme}>
      {mode === "dark" ? <BsMoon /> : <FaSun />}
    </ToggleWrapper>
  );
};
