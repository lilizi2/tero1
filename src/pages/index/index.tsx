import { Button, Text, View } from "@tarojs/components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, minus } from "../../actions/counter";
import { RootState } from "../../reducers";
import "./index.scss";

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
// class Index extends Component {
//   componentWillReceiveProps (nextProps) {
//     console.log(this.props, nextProps)
//   }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Button className='add_btn' onClick={this.props.add}>+</Button>
//         <Button className='dec_btn' onClick={this.props.dec}>-</Button>
//         <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
//         <View><Text>{this.props.counter.num}</Text></View>
//         <View><Text>Hello, World</Text></View>
//       </View>
//     )
//   }
// }

// export default Index

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
