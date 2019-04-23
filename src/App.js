import React from "react";
import { View } from "react-native";
import { animated, useSpring } from "react-spring/universal";

export default () => {
  const squareStyle = {
    backgroundColor: "red",
    height: 50,
    width: 100
  };

  const motionProps = useSpring({ height: 500, from: { height: 50 } });
  const motionSquareStyle = {
    ...squareStyle,
    height: motionProps.height
  };

  const AnimatedView = animated(View);

  return (
    <View>
      <AnimatedView style={motionSquareStyle} />
    </View>
  );
};
