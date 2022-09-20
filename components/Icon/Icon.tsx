import { FC } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { iconSources, IconTypes } from "./Icons";

type IconProps = {
  type: IconTypes;
};

export const Icon: FC<IconProps> = ({ type }) => {
  const source = iconSources[type];
  return (
    <View style={styles.icon}>
      <Image style={styles.icon} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
  },
});
