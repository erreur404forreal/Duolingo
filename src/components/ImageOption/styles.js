import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderColor: "#D3D3D3",
        borderRadius: 10,
        borderBottomWidth: 3,
        width: "48%",
        height: "48%",
        alignItems: "center",
        padding: 10,
    },
    optionSelectedContainer: {
        backgroundColor: "#DDF4FE",
        borderColor: "#81D5FE"
    },
    optionImage: {

        width: "100%",
        flex: 1,
    },
    optionText: {
        color: "#000",
        fontWeight: "bold"
    },
    optionSelectedText: {
        color: "#40BEF7",
        fontWeight: "bold"
    }

  });

  export default styles;