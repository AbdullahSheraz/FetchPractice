import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../theme/theme'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false)

  return (
    <View className="flex-1 relative">
      <StatusBar backgroundColor={'black'} animated={true} barStyle='light-content' />
      <Image blurRadius={70} source={require('../assets/images/bg.png')}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: '7%' }} className="mx-4 my-4 relative z-50">
          <View className="flex-row justify-end items-center rounded-full" style={{ backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent' }}>

            {
              showSearch ? (
                <TextInput
                  placeholder='Type City'
                  placeholderTextColor={'lightgray'}
                  className="pl-6 h-10 flex-1 text-base text-white"
                />
              ) : null
            }
            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              activeOpacity={0.4}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon color='white' size='25' />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})