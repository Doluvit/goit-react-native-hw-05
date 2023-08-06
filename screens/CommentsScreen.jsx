import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import Comment from "../components/Comment";
import { ScrollView } from "react-native";
import { IconArrowUp } from "../assets/icons/icons";
import { useRef } from "react";

const CommentsScreen = () => {
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const route = useRoute();
  const uri = route.params.source;

  const scrollViewRef = useRef(null);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View
            style={[
              styles.postContainer,
              {
                paddingBottom: isOpenKeyboard ? 105 : 34,
                height: isOpenKeyboard ? 16 : 34,
              },
            ]}
          >
            <Image
              source={{ uri: uri }}
              style={{
                width: "100%",
                height: 240,
                borderRadius: 8,
                marginBottom: 32,
              }}
            />

            <ScrollView ref={scrollViewRef}>
              <Comment
                image={require("../assets/images/unknownUserIcon.jpg")}
                text={
                  "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
                }
                date={"09 червня, 2020 | 08:40"}
              />
              <Comment
                image={require("../assets/images/authorIcon.jpg")}
                text={
                  "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
                }
                date={"09 червня, 2020 | 09:14"}
                direction={"row-reverse"}
                textAlign={"left"}
              />
              <Comment
                image={require("../assets/images/unknownUserIcon.jpg")}
                text={"Thank you! That was very helpful!"}
                date={"09 червня, 2020 | 09:20"}
              />
              <Comment
                image={require("../assets/images/authorIcon.jpg")}
                text={
                  "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
                }
                date={"09 червня, 2020 | 09:14"}
                direction={"row-reverse"}
                textAlign={"left"}
              />
              <Comment
                image={require("../assets/images/unknownUserIcon.jpg")}
                text={"Thank you! That was very helpful!"}
                date={"09 червня, 2020 | 09:20"}
              />
            </ScrollView>
            <View
              style={[
                styles.passwordInputContainer,
                // isFocusedPassword && styles.inputFocused,
              ]}
            >
              <TextInput
                onFocus={() => setIsOpenKeyboard(true)}
                onBlur={() => setIsOpenKeyboard(false)}
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#F6F6F6",
                  borderWidth: 1,
                  borderColor: "#E8E8E8",
                  paddingLeft: 16,
                  paddingRight: 16,
                  borderRadius: 25,
                  fontSize: 16,
                  lineHeight: 19.36,
                }}
                placeholder="Коментувати"
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  backgroundColor: "#FF6C00",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={scrollToTop}
              >
                <IconArrowUp />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  postContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postPhotoContainer: {
    width: "100%",
    height: 240,
    borderRadius: 15,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cameraWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  input: {
    minWidth: "100%",
    height: 50,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#E8E8E8",
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderBottomWidth: 2,
    borderColor: "#E8E8E8",
    height: 50,
    marginBottom: 32,
  },
  onPublickButton: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 120,
  },
  trashButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    paddingBottom: 8,
    paddingTop: 8,
    alignItems: "center",
    borderRadius: 100,
  },
});

export default CommentsScreen;
