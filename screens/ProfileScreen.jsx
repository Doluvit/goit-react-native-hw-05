import React, { useEffect } from "react";
import { Image, Text, ScrollView, View, StyleSheet } from "react-native";
import { ImageBackgroundComponent } from "../components/ImageBackgroundComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import Post from "../components/Post";
import { LogOutButton } from "../components/LogOutButton";
import { IconClose } from "../assets/icons/icons";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/selectors";
import { FlatList } from "react-native";

const ProfileScreen = () => {
  const posts = useSelector(selectPosts);
  useEffect(() => {
    console.log(posts)
  })
  return (
    <ImageBackgroundComponent>
      <View style={styles.profileScreenContainer}>
        <View style={{ position: "absolute", top: 22, right: 0 }}>
          <LogOutButton />
        </View>
        <View style={styles.userPhoto}>
          <Image
            style={{ borderRadius: 16 }}
            source={require("../assets/images/user.jpg")}
          />
          <TouchableOpacity style={styles.closeButtonWrapper}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 25,
                height: 25,
                borderRadius: 50,
                backgroundColor: "#fff",
                borderColor: "#BDBDBD",
                borderWidth: 1,
              }}
            >
              <IconClose />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Natali Romanova</Text>

        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Post
              source={item.imageUrl}
              title={item.name}
              comments={item.query}
              country={item.location}
              query={item.query}
              coordinates={item.coords}
            />
          )}
        ></FlatList>
      </View>
    </ImageBackgroundComponent>
  );
};

const styles = StyleSheet.create({
  profileScreenContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  closeButtonWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -50,
    right: -12.5,
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 600,
    color: "#212121",
    textAlign: "center",
  },
});

export default ProfileScreen;
