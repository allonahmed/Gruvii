import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import HighlightText from "@sanar/react-native-highlight-text";

import { TimeSince } from "../../helpers/timeSince";

const Post = ({ item, onPress, backgroundColor, validCount, query }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, backgroundColor]}>
      <View style={styles.profile}>
        <Image
          source={{ uri: item.profile_picture }}
          style={styles.profileimage}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.header} numberOfLines={1}>
          <HighlightText
            style={styles.name}
            highlightStyle={{ backgroundColor: "#13997c", color: "white" }}
            searchWords={[query]}
            textToHighlight={item.first_name + " " + item.last_name}
          />
          <HighlightText
            style={styles.handle}
            highlightStyle={{ backgroundColor: "#13997c", color: "white" }}
            searchWords={[query]}
            textToHighlight={`@${item.handle}`}
          />
          <Text style={styles.date}>
            {validCount && TimeSince(item.date_posted)}
          </Text>
        </View>
        <HighlightText
          style={styles.post}
          highlightStyle={{ backgroundColor: "#13997c", color: "white" }}
          searchWords={[query]}
          textToHighlight={item.post}
        />
        <View style={styles.interactions}>
          <View style={styles.comments}>
            <Ionicons name={"chatbubble-outline"} size={14} />
            <Text style={{ fontSize: 11, paddingLeft: 2 }}>
              {item.comments}
            </Text>
          </View>
          <View style={styles.shares}>
            <Ionicons name={"ios-arrow-redo-outline"} size={17} />
            <Text style={{ fontSize: 11, paddingLeft: 2 }}>
              {item.retweets}
            </Text>
          </View>
          <View style={styles.likes}>
            <Ionicons name={"heart-outline"} size={16} />
            <Text style={{ fontSize: 11, paddingLeft: 2 }}>{item.likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#f8f8f899",
    marginBottom: 3,
    shadowColor: "#13997c",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    paddingVertical: 10
  },
  profile: {
    width: "20%",
    alignItems: "center"
  },
  profileimage: {
    borderRadius: 50,
    height: 50,
    width: 50
  },
  info: {
    width: "80%"
  },
  header: {
    color: "#000",
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold"
  },
  name: {
    fontWeight: "bold",
    paddingRight: 2
  },
  handle: {
    opacity: 0.8,
    paddingRight: 5
  },
  date: {
    opacity: 0.8
  },
  post: {
    color: "#000",
    opacity: 1
  },
  interactions: {
    paddingTop: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%"
  },
  shares: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%"
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%"
  }
});

export default Post;
