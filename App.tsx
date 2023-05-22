import { ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurbg from './src/assets/bg-blur.png'

import Stripes from './src/assets/stripes.svg'
import { styled } from 'nativewind'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  const StyledStripes = styled(Stripes)
  if (!hasLoadedFonts) {
    return null
  }
  return (
    <ImageBackground
      source={blurbg}
      className="relative flex-1 items-center bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar translucent style="light" />
    </ImageBackground>
  )
}
