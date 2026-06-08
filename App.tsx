import { NewAppScreen } from '@react-native/new-app-screen';
import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
   const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1',
      );

      const result = await response.json();

      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
  const testApis = async () => {
    try {
      const [posts, users, comments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(r =>
          r.json(),
        ),
      ]);

      console.log('Posts:', posts);
      console.log('Users:', users);
      console.log('Comments:', comments);
    } catch (error) {
      console.log(error);
    }
  };

  testApis();
}, []);

  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppWeb />
      <Text>HAjasnjnsa</Text>
    </SafeAreaProvider>
  );
}

function AppWeb() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        // source={{uri: 'http://192.168.3.127:3000'}}
        source={{uri: 'http://10.239.209.171:3000'}}
        style={{flex: 1}}
        onMessage={(event) => {
          const data = JSON.parse(event.nativeEvent.data);
          console.log('WEBVIEW EVENT =>', data);
        }}
      />
    </SafeAreaView>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
