import { useState, useEffect } from 'react';
import { Text, View, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import LoadingPage from '../components/loading/loading';

import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
  // for the loading page
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // State variable to keep track of the current event index
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const upcomingEvents = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' },
    // Add more events here
  ];

  
  // Function to handle automatic scrolling of the ad bar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === upcomingEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the time interval to adjust the scrolling speed (milliseconds)

    return () => clearInterval(interval);
  }, []);

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

              {/* FlatList to render the upcoming events horizontally */}
              <FlatList
                data={upcomingEvents}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      padding: 27,
                      marginRight: 10,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: index === currentEventIndex ? 'green' : 'transparent',
                    }}
                    onPress={() => setCurrentEventIndex(index)}
                  >
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
              {/* Dot Indicators */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                {upcomingEvents.map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: index === currentEventIndex ? 'green' : 'gray',
                      marginHorizontal: 5,
                    }}
                  />
                ))}
              </View>
            </View> 
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Return the prepared content
  return content;
};

export default Home;

