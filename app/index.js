import { useState, useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import LoadingPage from '../components/loading/loading';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
  // for the loading page
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay with useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // milliseconds
  }, []);

  // add search term
  const [searchTerm, setSearchTerm] = useState("");

  // Prepare the content to be rendered based on the isLoading state
  let content;

  if (isLoading) {
    content = <LoadingPage />;
  } else {
    content = (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
            headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />,
            headerTitle: "",
            headerShown: false,
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if (searchTerm) {
                  router.push(`search/${searchTerm}`);
                }
              }}
            />
            <View style={{ marginTop: 20 }}></View>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
               Upcoming Events
              </Text>
              <View style={{ backgroundColor: 'white', padding: 10 }}></View>
                <Text>Event 1</Text>
                <Text>Event 2</Text>
              </View>
             
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Return the prepared content
  return content;
};

export default Home;

