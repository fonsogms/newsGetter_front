import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const VotingSection = ({ index, rightVotes, leftVotes }) => {
  if (!rightVotes && !leftVotes) {
    rightVotes = 1;
    leftVotes = 1;
  }
  const [leftClicked, setLeftClicked] = useState<boolean>(false);
  const [rightClicked, setRightClicked] = useState<boolean>(false);

  const totalVotes = rightVotes + leftVotes;
  const rightPercentage: number = (rightVotes * 100) / totalVotes;
  const leftPercentage: number = (leftVotes * 100) / totalVotes;

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          height: 30,
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setLeftClicked(!leftClicked);
            setRightClicked(false);
          }}
        >
          <Image
            style={{ height: 30, width: 30, margin: 10 }}
            blurRadius={leftClicked ? 4 : 0}
            source={require("../../assets/voteLeft.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setLeftClicked(false);

            setRightClicked(!rightClicked);
          }}
        >
          <Image
            style={{ height: 30, width: 30, margin: 10 }}
            blurRadius={rightClicked ? 3 : 0}
            source={require("../../assets/voteRight.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            margin: 10,
            fontFamily: "Mohave-Medium",
            fontSize: 18,
            color: "#FFCE54",
          }}
        >
          Left
        </Text>
        <Text
          style={{
            margin: 10,
            fontFamily: "Mohave-Medium",
            fontSize: 18,
            color: "#48CFAD",
          }}
        >
          Right
        </Text>
      </View>
      <View
        style={{
          height: 20,
          flexDirection: "row",
          width: "90%",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFCE54",
            height: "100%",
            width: `${leftPercentage}%`,
          }}
        >
          <Text
            style={{
              fontFamily: "Mohave-Medium",
              fontSize: 18,
              color: "grey",
            }}
          >
            {leftPercentage.toFixed(0)}%
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#48CFAD",
            height: "100%",
            width: `${rightPercentage}%`,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "Mohave-Medium",
              fontSize: 18,
              color: "grey",
            }}
          >
            {rightPercentage.toFixed(0)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default VotingSection;
