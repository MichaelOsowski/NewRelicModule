import { NativeModules } from 'react-native';

type NewrelicmoduleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Newrelicmodule } = NativeModules;

export default Newrelicmodule as NewrelicmoduleType;
