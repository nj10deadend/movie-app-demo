import { icons } from "@/constants/icons";
import { Tabs } from 'expo-router';
import { capitalize } from "lodash";
import React from 'react';
import { Image, View } from 'react-native';

interface TabProps {
    id: number;
    title: string;
    tabIcon: any;
}

const _Layout = () => {

    const tabs: any = [
        {
            id: 1,
            title: 'index',
            tabIcon: icons.home,
        },
        {
            id: 2,
            title: 'search',
            tabIcon: icons.search,
        },
        {
            id: 3,
            title: 'profile',
            tabIcon: icons.person,
        },
        {
            id: 4,
            title: 'saved',
            tabIcon: icons.save,
        }
    ];

    const TabIcon: any = ({ title, focused, icon }: any) => {
        const tintColor = focused ? '0000FF' : 'A8B5DB';
        return (
            <View>
                <Image source={icon} tintColor={tintColor} />
            </View>
        )
    };

    const tabScreens = tabs.map(({ id, title, tabIcon }: TabProps) => {
        return (
                <Tabs.Screen
                    name={title}
                    key={id}
                    options={{
                        headerShown: false,
                        title: capitalize(title),
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={tabIcon} title={title} />
                        ),
                    }}
                />
            )
    })
    return (
        <Tabs>
            {tabScreens}
        </Tabs>
    )
};

export default _Layout;