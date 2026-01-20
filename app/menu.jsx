import { StyleSheet, Appearance } from "react-native";

import { Colors } from "@/constants/theme";

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)

    const Container = 
}

function createStyles(theme, colorScheme){
    return StyleSheet.create({
        
    })
}