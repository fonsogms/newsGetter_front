import { StyleSheet } from "react-native";

export const titleStyle = StyleSheet.create({
  container: {
    color: "#646464",
    fontSize: 15,
    fontFamily: "Mohave-Medium",
    marginBottom: 10,
  },
});
export const descriptionStyle = StyleSheet.create({
  container: {
    color: "#4F4F4F",
    fontSize: 12,
    fontFamily: "Mohave-Regular",
    marginBottom: 10,
  },
});

export const textViewStyle = StyleSheet.create({
  container: {
    margin: 10,
  },
});
export const articleMainStyle = StyleSheet.create({
  container: { backgroundColor: "white", marginBottom: 40 },
});
export const CategoriesBar = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#48CFAD",
    height: 25,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6.68,

    elevation: 11,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    // background color must be set
    // backgroundColor: "#0000", // invisible color
  },
});

export const CategoriesText = (selected: boolean) =>
  StyleSheet.create({
    container: {
      fontFamily: "Mohave-Medium",
      color: selected ? "#FFCE54" : "white",
      fontSize: 20,
    },
  });
