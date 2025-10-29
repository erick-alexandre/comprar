import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest}: Props, ) {
    return (
        <TouchableOpacity {...rest} activeOpacity={0.7} style={style.container}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    );
}
