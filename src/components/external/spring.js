import { animated } from "react-spring";
import styled from "styled-components";

import React, { useState, useRef } from "react";
import { useTransition, useSpring, useChain, config } from "react-spring";
// import { Global, Container, Item } from './styles'
const data = [
  {
    name: "Rare Wind",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    name: "Saint Petersburg",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    name: "Deep Blue",
    description: "#e0c3fc → #8ec5fc",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    height: 400,
  },
  {
    name: "Ripe Malinka",
    description: "#f093fb → #f5576c",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    height: 400,
  },
  {
    name: "Perfect White",
    description: "#fdfbfb → #ebedee",
    css: "linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)",
    height: 400,
  },
  {
    name: "Near Moon",
    description: "#5ee7df → #b490ca",
    css: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    height: 400,
  },
  {
    name: "Wild Apple",
    description: "#d299c2 → #fef9d7",
    css: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    height: 200,
  },
  {
    name: "Ladoga Bottom",
    description: "#ebc0fd → #d9ded8",
    css: "linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)",
    height: 400,
  },
  {
    name: "Sunny Morning",
    description: "#f6d365 → #fda085",
    css: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    height: 200,
  },
  {
    name: "Lemon Gate",
    description: "#96fbc4 → #f9f586",
    css: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
    height: 400,
  },
  {
    name: "Salt Mountain",
    description: " #FFFEFF → #D7FFFE",
    css: "linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)",
    height: 200,
  },
  {
    name: "New York",
    description: " #fff1eb → #ace0f9",
    css: "linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)",
    height: 400,
  },
  {
    name: "Soft Grass",
    description: " #c1dfc4 → #deecdd",
    css: "linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)",
    height: 400,
  },
  {
    name: "Japan Blush",
    description: " #ddd6f3 → #faaca8",
    css: "linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)",
    height: 200,
  },
];

const WrapperSpring = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  background: #313347;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

const Item = styled(animated.div)`
  width: 100%;
  height: 100px;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;

export default function SpringExample() {
  const [open, set] = useState(false);

  const info = "#6887ff";
  const warning = "#f8f8f8";

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: warning },
    to: { size: open ? "100%" : "20%", background: open ? "white" : warning },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <WrapperSpring>
      <Container
        style={{ ...rest, width: size, height: size }}
        onClick={() => set(open => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }} />
        ))}
      </Container>
    </WrapperSpring>
  );
}
