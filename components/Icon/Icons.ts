import { ImageProps } from "react-native";

type IconSourcePaths = {
  dueToday: ImageProps["source"];
  scheduled: ImageProps["source"];
  done: ImageProps["source"];
};

export const iconSources: IconSourcePaths = {
  dueToday: require("../../assets/icon-pngs/dueToday.png"),
  scheduled: require("../../assets/icon-pngs/scheduled.png"),
  done: require("../../assets/icon-pngs/done.png"),
};

export type IconTypes = keyof IconSourcePaths;
