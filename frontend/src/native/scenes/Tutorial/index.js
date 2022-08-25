import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Gap from '../../components/Gap';
import Header from '../../components/Header';
import IcMainMenu from './ic-main-menu.png';
import IcKompas from './ic-kompas.png';
import IcCalendar from './ic-calendar.png';
import IcBoard from './ic-board.png';
import IcDown from './ic-down.png';
import IcUp from './ic-up.png';
import ImgMain1 from './MainMenu/image-main-1.png';
import ImgMain2 from './MainMenu/image-main-2.png';
import ImgMain3 from './MainMenu/image-main-3.png';
import ImgMain4 from './MainMenu/image-main-4.png';
import ImgMain5 from './MainMenu/image-main-5.png';
import ImgExplore1 from './ExploreMenu/MTR1.png';
import ImgExplore2 from './ExploreMenu/MTR2.png';
import ImgRecipe1 from './RecipeMenu/MRS1.png';
import ImgRecipe2 from './RecipeMenu/MRS2.png';
import ImgRecipe3 from './RecipeMenu/MRS3.png';
import ImgRecipe4 from './RecipeMenu/MRS4.png';
import ImgRecipe5 from './RecipeMenu/MRS5.png';
import ImgRecipe6 from './RecipeMenu/MRS6.png';
import ImgSchedule1 from './ScheduleMenu/MJM1.png';
import ImgSchedule2 from './ScheduleMenu/MJM2.png';
import ImgSchedule3 from './ScheduleMenu/MJM3.png';
import ImgSchedule4 from './ScheduleMenu/MJM4.png';

const Tutorial = () => {
  const [showMain, setShowMain] = useState(false);
  const [showExploreReceip, setShowExploreReceip] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showMyReceip, setShowMyReceip] = useState(false);

  return (
    <View style={styles.page}>
      <Header leftSettings={{ type: 'back' }} title="Buku Panduan" />
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <TouchableOpacity style={styles.containerItem} onPress={() => setShowMain(!showMain)}>
          <Image source={IcMainMenu} style={styles.iconApp} />
          <Text style={styles.title}>Pengenalan Menu Utama</Text>
          {!showMain && <Image source={IcDown} style={styles.iconNav} />}
          {showMain && <Image source={IcUp} style={styles.iconNav} />}
        </TouchableOpacity>
        {showMain && (
          <View>
            <Gap height={16} />
            <Image source={ImgMain1} style={styles.image} />
            <Image source={ImgMain2} style={styles.image} />
            <Image source={ImgMain3} style={styles.image} />
            <Image source={ImgMain4} style={styles.image} />
            <Image source={ImgMain5} style={styles.image} />
          </View>
        )}
        <Gap height={16} />
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => setShowExploreReceip(!showExploreReceip)}
        >
          <Image source={IcKompas} style={styles.iconApp} />
          <Text style={styles.title}>Menu Telusuri Resep</Text>
          {!showExploreReceip && <Image source={IcDown} style={styles.iconNav} />}
          {showExploreReceip && <Image source={IcUp} style={styles.iconNav} />}
        </TouchableOpacity>
        {showExploreReceip && (
          <View>
            <Gap height={16} />
            <Image source={ImgExplore1} style={styles.imageV1} />
            <Image source={ImgExplore2} style={styles.imageV1} />
          </View>
        )}
        <Gap height={16} />
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => setShowSchedule(!showSchedule)}
        >
          <Image source={IcCalendar} style={styles.iconApp} />
          <Text style={styles.title}>Menu Jadwal Masak</Text>
          {!showSchedule && <Image source={IcDown} style={styles.iconNav} />}
          {showSchedule && <Image source={IcUp} style={styles.iconNav} />}
        </TouchableOpacity>
        {showSchedule ? (
          <View>
            <Gap height={16} />
            <Image source={ImgSchedule1} style={styles.imageV2} />
            <Image source={ImgSchedule2} style={styles.imageV2} />
            <Image source={ImgSchedule3} style={styles.imageV5} />
            <Image source={ImgSchedule4} style={styles.imageV2} />
          </View>
        ) : null}
        <Gap height={16} />
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => setShowMyReceip(!showMyReceip)}
        >
          <Image source={IcBoard} style={styles.iconApp} />
          <Text style={styles.title}>Menu Resep Saya</Text>
          {!showMyReceip && <Image source={IcDown} style={styles.iconNav} />}
          {showMyReceip && <Image source={IcUp} style={styles.iconNav} />}
        </TouchableOpacity>
        {showMyReceip && (
          <View>
            <Gap height={16} />
            <Image source={ImgRecipe1} style={styles.imageV4} />
            <Image source={ImgRecipe2} style={styles.imageV3} />
            <Image source={ImgRecipe3} style={styles.imageV3} />
            <Image source={ImgRecipe4} style={styles.imageV3} />
            <Image source={ImgRecipe5} style={styles.imageV3} />
            <Image source={ImgRecipe6} style={styles.imageV3} />
          </View>
        )}
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Tutorial;

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 16,
  },
  containerItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 14,
  },
  title: {
    fontSize: 15,
    color: '#000000',
    flex: 1,
    marginLeft: 16,
  },
  iconApp: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
  },
  iconNav: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  image: {
    width: dimensions.width - 32,
    height: dimensions.height / 4,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageV1: {
    width: dimensions.width - 32,
    height: 240,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageV2: {
    width: dimensions.width - 32,
    height: 205,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageV3: {
    width: dimensions.width - 32,
    height: 247,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageV4: {
    width: dimensions.width - 32,
    height: 263,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageV5: {
    width: dimensions.width - 32,
    height: 263,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
