import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios,{AxiosError} from "axios"
import { url } from "../../globalVariables";
const VotingSection = ({ index, rightVotes, leftVotes,voteValue ,token}) => {
  if (!rightVotes && !leftVotes) {
    rightVotes = 1;
    leftVotes = 1;
  }
  console.log(voteValue)
  if(!voteValue)voteValue=0;
  const [curVoteVal,setCurVoteVal]=useState<number>(voteValue)
  const totalVotes = rightVotes + leftVotes;
  const rightPercentage: number = (rightVotes * 100) / totalVotes;
  const leftPercentage: number = (leftVotes * 100) / totalVotes;
 const vote=async(vote:number)=>{
   const newVote=vote*-1
   setCurVoteVal(newVote)
  axios.post(url+"/api/news/vote",{articleId:index,value:newVote}, { headers: { Authorization: `Bearer ${token}` } }).then(res=>{
console.log(res.data)
  }).catch((err:AxiosError)=>{
console.log(err.response.data.message)
  })

 }
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
            if(curVoteVal==-1){
              vote(0)
            }
            else{
              vote(1)


            }
          }}
        >
          <Image
            style={{ height: 30, width: 30, margin: 10 }}
            blurRadius={curVoteVal==-1  ? 6 : 0}
            source={require("../../assets/voteLeft.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if(curVoteVal==1){
              vote(0)}
            else{
              vote(-1)

            }
          }}
        >
          <Image
            style={{ height: 30, width: 30, margin: 10 }}
            blurRadius={curVoteVal==1 ? 6 : 0}
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
