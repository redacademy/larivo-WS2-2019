import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03dac4",
    width: "100%"
  },
  listView: {
    backgroundColor: "white",
    minHeight: "100%",
    paddingBottom: 120
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 8,
    width: "100%",
    height: "100%"
  },
  content: {
    textAlign: "left",
    color: "#13443C",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 34,
    fontFamily: "SFProText-Regular",
    fontWeight: "bold"
  },
  cardImage: {
    alignSelf: "center",
    height: 150,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  },
  item: {
    paddingTop: 15,
    paddingBottom: 0
  }
});

export default styles;
