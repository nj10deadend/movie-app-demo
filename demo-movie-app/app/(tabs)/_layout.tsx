import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
            name='index'
            options={{
                /*
                    Hides the specific screen/page's header AND
                    makes the title show up at the bottom of the screen
                */
                headerShown: false, 
                title: 'Home'
            }}
        />
    </Tabs>
  )
}

export default _Layout;