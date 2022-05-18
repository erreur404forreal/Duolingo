import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "stretch"
    },
    optionsContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",

    },
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
    optionImage: {

        width: "100%",
        flex: 1,
    },
    optionText: {

    }

  });

  export default styles;