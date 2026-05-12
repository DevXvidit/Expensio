import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

Reactotron
  .configure({
    name: 'Expensio'
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/
    },
    editor: false,
    errors: { veto: () => false },
    overlay: false,
  })
  .connect();

Reactotron.clear();

console.tron = Reactotron;

export default Reactotron;
