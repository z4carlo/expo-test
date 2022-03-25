export const colours = {
    appBackground: "black",
    appNav: "#002a38",
    appNavFocus: "#7bd1c6",
    appNavInactive: "#daf2ef",
    background: "#f5f6fa",
    tint: "#f5f6fa",
    primary: "#35988b",
    secondary: "#0f3047",
    accent: "#7bd1c6",
    primaryMuted: "#143935",
    secondaryMuted: "000000",
}

export const spacing = {
    mx0: {
        marginHorizontal: 0,
    }
}

export type ThemeColour = Partial<typeof colours>;
export type ThemeSpacing = Partial<typeof spacing>;