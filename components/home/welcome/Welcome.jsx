import { useState}  from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

// define the job types
// const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ( { searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}> CIRCLE </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TouchableOpacity style={styles.searchBtn} onPress={(handleClick) => {}}>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              // parse in the value of what you searching for
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              maxLength={23}
              placeholder="Search event"
            />
        </View>

        {/* need to parse handleClick into onPress so it handles the searchTerm*/}
      </View>

      {/* <View style={styles.tabsContainer}>
        <FlatList
          data = {jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          // setting the horizontal and scrollable
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View> */}
    </View>
  )
}

export default Welcome;