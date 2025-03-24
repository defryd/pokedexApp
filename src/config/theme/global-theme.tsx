import { StyleSheet } from "react-native";

export interface ThemeColors {
    text: string;
    background: string;
    cardBackground: string;
    buttonTextColor: string;
    link: string;
    start: string;
}

export const globalTheme = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 10,
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    mainContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: 500,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export const lightColors: ThemeColors = {
    text: "black",

    background: "#F3F2F7",
    cardBackground: "white",
    buttonTextColor: "white",
    link: "#0247ff",
    start: "#7000ff",
};

export const darkColors: ThemeColors = {
    text: "white",

    background: "#090909",
    cardBackground: "#2d2d2d",
    buttonTextColor: "black",
    link: "#02ffff",
    start: "#ffcd00",
};
