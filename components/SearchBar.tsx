import { icons } from '@/constants/icons'
import React, { useState } from 'react'
import { 
  Button,
  Image, 
  // StyleSheet, 
  // Text, 
  TextInput, View 
} from 'react-native';
// import { useRouter } from 'expo-router';
// import { TextIn}

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  refetchMovies: any; // Adjust the type based on your refetch function
}

const SearchBar = ({ refetchMovies, searchTerm, setSearchTerm }: SearchBarProps) => {
  // const router = useRouter();
  return (
    <View style={{ margin: 'auto'}} className="flex-row items-center rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5 color-black" resizeMode="contain" />
      <TextInput
        className="ml-2 flex-1 text-gray-950 border-cyan-950 border-r-amber-500"
        data-testid="search-input"
        // onPress={() => router.push('/search')}
        onChange={(e) => setSearchTerm(e.nativeEvent.text)}
        placeholder="Enter movie title"
        value={searchTerm}
      />
      <Button title="Search" onPress={refetchMovies} />
    </View>
  )
}

export default SearchBar

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cont: { 
//     flex: 1,
//     flexDirection: 'row',
//     marginInlineStart: 50
//   }
// })