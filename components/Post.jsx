import { View, Image, StyleSheet, Text } from "react-native";
import { IconComment, IconLocalPosition } from "../assets/icons/icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";

const Post = ({ source, title, query, country, coords }) => {
  const navigation = useNavigation();
 
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ marginBottom: 8 }}>
        <Image
          source={{ uri: source }}
          resizeMode={"cover"}
          style={{ width: "100%", height: 240, borderRadius: 8 }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CommentsScreen", {
                source,
              });
            }}
          >
            <Text>
              <IconComment />
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                color: "#BDBDBD",
              },
            ]}
          >
            {query}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MapScreen", {
                coords,
              });
            }}
          >
            <Text>
              <IconLocalPosition />
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                color: "#212121",
                textDecorationLine: "underline",
              },
            ]}
          >
            {country}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  title: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
});
