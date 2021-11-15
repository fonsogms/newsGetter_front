import React, { useState, useEffect, useRef } from "react";
import { Animated, View, Image, Text, TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { apiService } from "../../services/apiService";

//@refresh reset
const VotingSection = ({
  index,
  rightVotes,
  leftVotes,
  voteValue,
  token,
  publisher,
}) => {
  const isInitialMount = useRef(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 90,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  fadeIn();
  if (!voteValue) voteValue = 0;
  const [votes, setVotes] = useState<{ leftVotes: number; rightVotes: number }>(
    {
      leftVotes: leftVotes,
      rightVotes: rightVotes,
    }
  );
  const [curVoteVal, setCurVoteVal] = useState<number>(voteValue);
  const totalVotes = votes.rightVotes + votes.leftVotes;
  let rightPercentage: number = (votes.rightVotes * 100) / totalVotes;
  let leftPercentage: number = (votes.leftVotes * 100) / totalVotes;
  if (!votes.rightVotes && !votes.leftVotes) {
    rightPercentage = 50;
    leftPercentage = 50;
  }
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      voting();
    }
  }, [curVoteVal]);
  const voting = async () => {
    try {
      const data = await apiService.voteArticle(
        index,
        curVoteVal,
        publisher.id
      );

      setVotes(data.votes);
    } catch (err) {
      apiService.handleError(err);
    }
  };
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
            if (curVoteVal == -1) {
              setCurVoteVal(0);
            } else {
              setCurVoteVal(-1);
            }
          }}
        >
          <Image
            style={{ height: 30, width: 30, margin: 10 }}
            blurRadius={curVoteVal == -1 ? 6 : 0}
            source={require("../../assets/voteLeft.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log(rightVotes, "one");
            if (curVoteVal == 1) {
              console.log("dafuq?");
              setCurVoteVal(0);
            } else {
              setCurVoteVal(1);
            }
          }}
        >
          <Image
            style={{ height: 30, width: 30, margin: 10 }}
            blurRadius={curVoteVal == 1 ? 6 : 0}
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
            fontFamily: theme.mohave_medium,
            fontSize: 18,
            color: theme.yellow,
          }}
        >
          Left
        </Text>
        <Text
          style={{
            margin: 10,
            fontFamily: theme.mohave_medium,
            fontSize: 18,
            color: theme.green,
          }}
        >
          Right
        </Text>
      </View>
      <Animated.View
        style={{
          height: 20,
          flexDirection: "row",
          width: fadeAnim.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
        }}
      >
        <View
          style={{
            backgroundColor: theme.yellow,
            height: "100%",
            width: `${leftPercentage}%`,
          }}
        >
          <Text
            style={{
              fontFamily: theme.mohave_medium,
              fontSize: 18,
              color: "grey",
            }}
          >
            {leftPercentage.toFixed(0)}%
          </Text>
        </View>
        <View
          style={{
            backgroundColor: theme.green,
            height: "100%",
            width: `${rightPercentage}%`,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: theme.mohave_medium,
              fontSize: 18,
              color: "grey",
            }}
          >
            {rightPercentage.toFixed(0)}%
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default VotingSection;
