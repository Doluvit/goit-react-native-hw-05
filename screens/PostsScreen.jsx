import { View, Image, Text, StyleSheet } from "react-native";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/selectors";
import { FlatList } from "react-native";
import { useEffect } from "react";

const PostsScreen = () => {
  const posts = useSelector(selectPosts);
 
 console.log("PostsScreen 11:", posts)
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Image source={require("../assets/images/user.jpg")} />
          <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Post
              source={item.imageUrl}
              title={item.name}
              comments={item.query}
              country={item.location}
              coords={item.coords}
              query={item.query}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  userInfo: {
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
    marginBottom: 32,
  },
  userName: {
    fontFamily: "Roboto-Medium",
    lineHeight: 15.23,
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    lineHeight: 12.89,
    fontSize: 11,
    color: "#212121CC",
  },
});

export default PostsScreen;
