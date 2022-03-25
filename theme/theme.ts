import {
    colours as defaultColours,
    spacing as defaultSpacing,
} from "./styles";

import type {
    ThemeColour,
    ThemeSpacing,
} from "./styles"

export interface Theme {
    spacing?: ThemeSpacing;
    colors?: ThemeColour;
}

interface ThemeProps {
    colors?: ThemeColour;
    spacing?: ThemeSpacing;
}

export const buildTheme = ({
    colors = defaultColours,
    spacing = defaultSpacing,
}: ThemeProps): Theme => ({
    colors: colors,
    spacing: spacing,
});