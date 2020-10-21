import { Button, Text, View } from "@tarojs/components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, minus } from "../../actions/counter";
import { RootState } from "../../reducers";
import "./index.scss";

const Index: React.FC = () => {
  const dispatch = useDispatch();

  const num = useSelector((state: RootState) => state.counter.num);

  return (
    <View className="index">
      <Button
        className="add_btn"
        onClick={() => {
          dispatch(add());
          console.log(123);
        }}
        appPackagename="123"
        appBundleid="123"
        appConnectId="123"
      >
        +
      </Button>
      <Button
        className="add_btn"
        onClick={() => {
          dispatch(minus());
          console.log(123);
        }}
        appPackagename="123"
        appBundleid="123"
        appConnectId="123"
      >
        -
      </Button>
      <Text>999{num}</Text>
    </View>
  );
};
export default Index;
