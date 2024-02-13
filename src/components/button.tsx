import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

type ButtonProps = {
  children: ReactNode;
} & TouchableOpacityProps;

type ButtonTextProps = {
  children: ReactNode;
};

type ButtonIconProps = {
  nameIcon: keyof typeof Feather.glyphMap;
};

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

export function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-black font-heading text-base mx-2">{children}</Text>
  );
}

export function ButtonIcon({ nameIcon }: ButtonIconProps) {
  return <Feather name={nameIcon} size={20} color={colors.black} />;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
