import { createContext, PropsWithChildren } from "react";
import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "../../config/theme/global-theme";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

const customLightTheme = {
    ...LightTheme,
    fonts: MD3LightTheme.fonts,
    // varts: lightColors,
};

const customDarkTheme = {
    ...DarkTheme,
    fonts: MD3DarkTheme.fonts,
    // varts: darkColors,
};
export const ThemeContext = createContext({
    isDark: false,
    theme: customLightTheme,
});

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const theme = isDark ? customDarkTheme : customLightTheme;

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer theme={isDark ? NavigationDarkTheme : NavigationDefaultTheme}>
                <ThemeContext.Provider
                    value={{
                        isDark,
                        theme,
                    }}>
                    {children}
                </ThemeContext.Provider>
            </NavigationContainer>
        </PaperProvider>
    )
};