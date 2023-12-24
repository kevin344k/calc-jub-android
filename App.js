import * as React from 'react';
import { registerRootComponent } from 'expo';
import { PaperProvider } from 'react-native-paper';
import App from "./components/App";

export default function Main() {
  return (
   <PaperProvider>
     <App></App>
   </PaperProvider>
  );
}
