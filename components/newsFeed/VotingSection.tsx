import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios, { AxiosError } from "axios";
import { url } from "../../globalVariables";
//@refresh reset
const VotingSection = ({
  index,
  rightVotes,
  leftVotes,
  voteValue,
  token,
  publisher,
}) => {
  //console.log(voteValue)
  console.log("mounting", rightVotes);
  const isInitialMount = useRef(true);
  if (!voteValue) voteValue = 0;
  const [votes, setVotes] = useState<{ leftVotes: number; rightVotes: number }>(
    {
      leftVotes: leftVotes,
      rightVotes: rightVotes,
    }
  );
  const [curVoteVal, setCurVoteVal] = useState<number>(voteValue);
  const totalVotes = votes.rightVotes + votes.leftVotes;
  console.log(totalVotes, " this is total votes");
  let rightPercentage: number = (votes.rightVotes * 100) / totalVotes;
  let leftPercentage: number = (votes.leftVotes * 100) / totalVotes;
  console.log(rightPercentage, leftPercentage);
  if (!votes.rightVotes && !votes.leftVotes) {
    rightPercentage = 50;
    leftPercentage = 50;
  }
  console.log(rightPercentage, leftPercentage);

  useEffect(() => {
    if (isInitialMount.current) {
      console.log("mounted");
      isInitialMount.current = false;
    } else {
      voting();
    }
  }, [curVoteVal]);
  const voting = async () => {
    axios
      .post(
        url + "/api/news/vote",
        {
          articleId: index,
          value: curVoteVal,
          publisherId: publisher.id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data);
        setVotes(res.data.votes);
      })
      .catch((err: AxiosError) => {
        console.log(err.response.data.message);
      });
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
