import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProviderBanco from "./Providers/ProviderBanco";
import NavegacionTabs from "./navigation/Navegacion";

export default function App() {
  return (
    <ProviderBanco>
      <NavigationContainer>
        <NavegacionTabs />
      </NavigationContainer>
    </ProviderBanco>
  );
}

