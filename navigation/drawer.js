import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "./tabNavigator";
import Profile from "../screens/profile";

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="tabNavigator" component={BottomTabNavigator}/>
            <Drawer.Screen name="profile" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator()