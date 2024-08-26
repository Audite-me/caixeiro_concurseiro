import { SVGAdapter } from "@/lib/svg-adapter";
import { useEffect } from "react";
import { Button, Pressable, ViewStyle } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
  Easing,
  interpolateColor,
} from "react-native-reanimated";
import { Path, Svg, Polyline } from "react-native-svg";

const AnimatedPolyline = Animated.createAnimatedComponent(Polyline);
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface CustomizeSVGAnimation {
  checked: boolean;
  height?: number;
  width?: number;
  style?: ViewStyle;
  handlePress: () => void;
}

const CHECKMARK = 42;
const BOX = 60;

export function CheckBoxAnimated({
  checked,
  style,
  height = 25,
  width = 25,
  handlePress,
}: CustomizeSVGAnimation) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(checked ? 1 : 0, {
      duration: checked ? 450 : 100,
      easing: Easing.linear,
    });
  }, [checked]);

  const checkAnimated = useAnimatedProps(() => ({
    strokeDashoffset: CHECKMARK * (1 - progress.value),
  }));

  const boxAnimated = useAnimatedProps(
    () => ({
      stroke: interpolateColor(progress.value, [0, 1], ["#ccc", "#FDB022"]),
    }),
    [],
    SVGAdapter
  );

  return (
    <Pressable onPress={handlePress}>
      <Svg
        width="24px"
        height="24px"
        viewBox="0 0 18 18"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="#FDB022"
      >
        <AnimatedPath
          id="box"
          d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
          animatedProps={boxAnimated}
        />
        <AnimatedPolyline
          id="checkmark"
          points="1 9 7 14 15 4"
          strokeDasharray={CHECKMARK}
          animatedProps={checkAnimated}
        />
      </Svg>
      <Button title="Pressione" onPress={handlePress} />
    </Pressable>
  );
}
