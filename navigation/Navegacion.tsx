import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../Pantallas/Inicio";
import Transferencias from "../Pantallas/Transferencia";
import Historico from "../Pantallas/Historico";

const Tab = createBottomTabNavigator();

export default function NavegacionTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Transferencias" component={Transferencias} />
      <Tab.Screen name="Historial" component={Historico} />
    </Tab.Navigator>
  );
}
