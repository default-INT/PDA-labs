import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {Footer} from "./components/Footer";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <Header title="Справочник единиц измерений" />
      <Content/>
      <Footer authors={['Трофимов Е.В.', 'Мойсейков Р.В.' , 'Солодков М.А.']}/>
    </FirebaseState>
  );
}

export default App;
