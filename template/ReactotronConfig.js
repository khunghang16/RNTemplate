import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({name: 'React Native Template'})
  .use() //  <- here i am!
  .connect(); //Don't forget about me!

export default reactotron;
