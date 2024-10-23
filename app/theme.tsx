import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import tw from "twrnc";
import { router } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const theme = () => {
  const [themeColor, setThemeColor] = useState("");
  const [theme,setTheme] = useState('')

  const themeBtn = async (color:string) => {
  await AsyncStorage.setItem('color',color)
    router.back();
  };

  const getTheme = async () => {
    const note = await AsyncStorage.getItem("color");
    if(note){
      setThemeColor(note)
    }
  };

  useEffect(() => {
    getTheme()
  }, []);
  return (
    <View style={tw`h-full`}>
      <View style={tw`h-9`}></View>
      <View
        style={tw`flex-row border-b-2 border-gray-300 justify-between items-center p-4`}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-circle-sharp"
            size={34}
            style={tw`text-blue-600`}
          />
        </TouchableOpacity>
      </View>

      <View style={tw``}>
        <TouchableOpacity
          onPress={() => themeBtn("")}
          style={tw`m-3 ${
            !themeColor ? "border-4 border-green-600" : ""
          } p-2 bg-white shadow-lg rounded-lg`}
        >
          <View
            style={tw`px-3 py-1 flex-row items-center justify-between bg-blue-600`}
          >
            <Text style={tw`font-bold text-white`}>Notes</Text>
            <TouchableOpacity onPress={() => router.push("/theme")}>
              <FontAwesome6 name="themeco" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={tw`bg-white m-3 p-2 rounded-lg shadow-lg`}>
            <View>
              <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
              <Text style={tw`h-3 w-30 bg-gray-200 my-1`}></Text>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
                <MaterialIcons name="delete" size={14} color="red" />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => themeBtn("pink")}
          style={tw`m-3 p-2 ${
            themeColor == "pink" ? "border-4 border-green-600" : ""
          } bg-white shadow-lg rounded-lg`}
        >
          <View
            style={tw`px-3 py-1 flex-row items-center justify-between bg-pink-600`}
          >
            <Text style={tw`font-bold text-white`}>Notes</Text>
            <TouchableOpacity onPress={() => router.push("/theme")}>
              <FontAwesome6 name="themeco" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={tw`bg-white m-3 p-2 rounded-lg shadow-lg`}>
            <View>
              <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
              <Text style={tw`h-3 w-30 bg-gray-200 my-1`}></Text>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
                <MaterialIcons name="delete" size={14} color="red" />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => themeBtn("black")}
          style={tw`m-3 p-2 ${
            themeColor == "black" ? "border-4 border-green-600" : ""
          } bg-white shadow-lg rounded-lg`}
        >
          <View
            style={tw`px-3 py-1 flex-row items-center justify-between bg-black`}
          >
            <Text style={tw`font-bold text-white`}>Notes</Text>
            <TouchableOpacity onPress={() => router.push("/theme")}>
              <FontAwesome6 name="themeco" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={tw`bg-white m-3 p-2 rounded-lg shadow-lg`}>
            <View>
              <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
              <Text style={tw`h-3 w-30 bg-gray-200 my-1`}></Text>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
                <MaterialIcons name="delete" size={14} color="red" />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => themeBtn("yellow")}
          style={tw`m-3 p-2 ${
            themeColor == "yellow" ? "border-4 border-green-600" : ""
          } bg-white shadow-lg rounded-lg`}
        >
          <View
            style={tw`px-3 py-1 flex-row items-center justify-between bg-yellow-400`}
          >
            <Text style={tw`font-bold text-white`}>Notes</Text>
            <TouchableOpacity onPress={() => router.push("/theme")}>
              <FontAwesome6 name="themeco" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={tw`bg-white m-3 p-2 rounded-lg shadow-lg`}>
            <View>
              <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
              <Text style={tw`h-3 w-30 bg-gray-200 my-1`}></Text>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`h-3 w-10 bg-gray-200`}></Text>
                <MaterialIcons name="delete" size={14} color="red" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default theme;
