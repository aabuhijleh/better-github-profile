import React, { useState } from "react";
import { usePersistentStore } from "src/store";
import { FiVolume, FiVolume2 } from "react-icons/fi";
import styled, { css } from "styled-components/macro";
import enableSoundSfx from "src/assets/sounds/enable-sound.mp3";
import disableSoundSfx from "src/assets/sounds/disable-sound.mp3";
import useSound from "use-sound";
import { shakeAnimation } from "src/styles/animations";

const Wrapper = styled.button`
  height: 2.4rem;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: currentColor;
  padding: 0 1rem;
  transition: var(--transition);

  &:hover {
    filter: brightness(90%);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const AnimatedIcon = styled.div<{ enableAnimation: boolean }>`
  height: 2rem;
  ${(props) =>
    props.enableAnimation &&
    css`
      animation: ${shakeAnimation} 0.3s linear;
    `}
`;

export const SoundToggle: React.FC = () => {
  const { soundEnabled, setSoundEnabled } = usePersistentStore(
    ({ soundEnabled, setSoundEnabled }) => ({
      soundEnabled,
      setSoundEnabled,
    })
  );
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
    <Wrapper onClick={toggleSound}>
      {soundEnabled ? (
        <AnimatedIcon enableAnimation={enableAnimation}>
          <FiVolume2 />
        </AnimatedIcon>
      ) : (
        <FiVolume />
      )}
    </Wrapper>
  );
};
