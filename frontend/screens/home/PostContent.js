import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import data from "../../assets/data/postdata.json.js";
import Post from "./PostCard.js";
import { updatePost } from "../../redux/reducers.js";

export default function PostContent() {
  const [selectedPost, setSelected] = useState(null); // keep track of post that is pressed
  const state = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();

  //Component that holds our Post component and passes in props and logic
  const RenderPost = ({ item }) => {
    const bg = item.id === selectedPost ? "#ffffff" : "#f8f8f8";
    const validCount = () => {
      return state.posts.length > 0;
    };
    return (
      <Post
        item={item}
        onPress={() => setSelected(item.id)}
        backgroundColor={{ bg }}
        validCount={validCount}
        query={state.query}
      />
    );
  };

  //triggers when query is updated... used to update posts data to filter all data included in query
  useEffect(() => {
    let newPost;
    const filterquery = (q) => {
      if (
        q.post.toLowerCase().includes(state.query.toLowerCase()) ||
        q.first_name.toLowerCase().includes(state.query.toLowerCase()) ||
        q.last_name.toLowerCase().includes(state.query.toLowerCase())
      )
        return true;
      else return false;
    };
    if (state.query.length > 0) {
      newPost = JSON.parse(data).filter(filterquery);
      dispatch(updatePost(newPost));
    }
  }, [state.query]);

  return (
    <SafeAreaView
      style={styles.postContainer}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        width: "100%"
      }}
    >
      <FlatList
        data={state.posts}
        renderItem={RenderPost}
        keyExtractor={(item) => item.id}
        extraData={[selectedPost, state.posts]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    width: "100%"
  }
});
