import React, {useState, useCallback} from 'react';
import {
  RefreshControl,
  ScrollView,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const RefControlView = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 4000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['cyan', 'magenta', 'yellow', 'black']}
            enabled={true}
            progressBackgroundColor="green"
            progressViewOffset={1}
            // colors={['red', 'green']}
            size="default"
          />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );

  // const [refresh, setRefresh] = useState(false);

  // const onRefereshing =
  //   (() => {
  //     setRefresh(true);
  //     setTimeout(() => {
  //       setRefresh(false);
  //     }, 4000);
  //   },
  //   []);
  // return (
  //   <View>
  //     <ScrollView
  //       refreshControl={
  //         <RefreshControl refreshing={refresh} onRefresh={onRefereshing} />
  //       }></ScrollView>
  //   </View>
  // );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default RefControlView;
