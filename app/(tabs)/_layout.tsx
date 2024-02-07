import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof SimpleLineIcons>['name'];
  color: string;
  style:{}
}) {
  return <SimpleLineIcons size={24} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel:false,
        tabBarStyle:{height:64}
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title:"Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} style={{ marginBottom: 5 }}/>,
          headerTitle:"Hi Akshay",
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <TabBarIcon
                    name="bell"
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Product',
          tabBarIcon: ({ color }) => <TabBarIcon name="bag" color={color} style={{ marginBottom: 5 }}/>,
        }}
      />
       <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => <TabBarIcon name="basket" color={color} style={{ marginBottom: 5 }}/>,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} style={{ marginBottom: 5 }}/>,
        }}
      />
    </Tabs>
  );
}
