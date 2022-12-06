import React from "react";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from '@expo/vector-icons';
import Header from "../components/Header";
import Home from "../flows/repositories/home";
import Favorites from "../flows/favorites";
import { useRepository } from "../hooks/useRepository";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();
  const { toggleUserSelectionModal } = useRepository();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header title="WeFit" onPress={toggleUserSelectionModal} />,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.REGULAR,
          fontSize: RFValue(14)
        },
      }}
    >
      <Tab.Screen
        name="Repositórios"
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="github" size={RFValue(24)} color={color} />
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Favoritos"
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name="star" size={RFValue(24)} color={color} />
          }
        }}
        component={Favorites}
      />
    </Tab.Navigator>
  );
}
