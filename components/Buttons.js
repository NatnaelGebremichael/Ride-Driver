import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MeanuButton from "./MeanuButton";
import SearchButton from "./SearchButton";
import HelpButton from "./HelpButton";
import MessageButton from "./MessageButton";
import ChangeStatus from "./ChangeStatus";
import EarningDisplay from "./EarningDisplay";

const Buttons = () => {
  return (
    <View>
      <MeanuButton />
      <SearchButton />
      <HelpButton />
      <MessageButton />
      <ChangeStatus />
      <EarningDisplay />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
