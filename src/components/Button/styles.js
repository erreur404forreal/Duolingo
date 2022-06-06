import { StyleSheet } from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#58CC02",
        height: 50,
        marginVertical: 10,

        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 5,
        borderBottomWidth: 5,
        borderBottomColor: "#57A600"
    },
    disabledContainer: {
        backgroundColor: "lightgrey",
        borderBottomColor: "grey"

    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
    }
});

export default styles;