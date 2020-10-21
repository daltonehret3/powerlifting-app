import React, {FC} from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: "700"
    }
})

export interface IButtonProps {
    onPress: () => void;
    buttonText: string;
    buttonStyles: {};
    testID: string;
}

export const Button: FC<IButtonProps> = (props) => {
    const {onPress, buttonText, buttonStyles, testID} = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.button,
                ...buttonStyles,
                alignSelf: 'flex-start'
            }}
            testID={testID}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
};
