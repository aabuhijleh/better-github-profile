import React, { useState } from "react";
import { usePersistentStore } from "src/store";
import { FiVolume, FiVolume2 } from "react-icons/fi";
import styled, { css } from "styled-components/macro";
import enableSoundSfx from "src/assets/sounds/enable-sound.mp3";
import disableSoundSfx from "src/assets/sounds/disable-sound.mp3";
import useSound from "use-sound";
import { shakeAnimation } from "src/styles/animations";
import { ToggleWrapper } from "src/components/layout/Navbar/ToggleWrapper";

const AnimatedIcon = styled.div<{ enableAnimation: boolean }>`
  ${(props) =>
    props.enableAnimation &&
    css`
      animation: ${shakeAnimation} 0.3s linear;
    `}
`;

export const SoundToggle: React.FC = () => {
  const soundEnabled = usePersistentStore((state) => state.soundEnabled);
  const setSoundEnabled = usePersistentStore((state) => state.setSoundEnabled);
  const [enableAnimation, setEnableAnimation] = useState(false);
  const [playEnableSoundSfx] = useSound(enableSoundSfx);
  const [playDisableSoundSfx] = useSound(disableSoundSfx);

  const toggleSound = () => {
    setEnableAnimation(true);
    if (soundEnabled) {
      playDisableSoundSfx();
      setSoundEnabled(false);
    } else {
      playEnableSoundSfx();
      setSoundEnabled(true);
    }
  };

  return (
    <ToggleWrapper onClick={toggleSound}>
      {soundEnabled ? (
        <AnimatedIcon enableAnimation={enableAnimation}>
          <FiVolume2 />
        </AnimatedIcon>
      ) : (
        <FiVolume />
      )}
    </ToggleWrapper>
  );
};
