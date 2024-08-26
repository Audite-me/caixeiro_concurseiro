import {
  createAnimatedPropAdapter,
  processColor,
} from "react-native-reanimated";

export const SVGAdapter = createAnimatedPropAdapter(
  (props) => {
    "worklet";
    if (Object.keys(props).includes("fill")) {
      props.fill = { type: 0, payload: processColor(props.fill) };
    }
    if (Object.keys(props).includes("stroke")) {
      props.stroke = { type: 0, payload: processColor(props.stroke) };
    }
  },
  ["fill", "stroke"]
);
