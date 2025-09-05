import SearchBar from "@/components/SearchBar";
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";
import React, { useState } from 'react';

export default function Index() {
  // Index page route name is 'Home' by default
  const [searchTerm, setSearchTerm] = useState<string>('');
  
    const { data: movies, isLoading, error, refetch} = useFetch(() => getMovies(searchTerm));
    if (isLoading) {
      return (
        <SafeAreaProvider>
          <>
            <Text style={{ color: 'black', paddingBlock: 20, alignSelf: 'center'}}>
              Loading...
            </Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </>
        </SafeAreaProvider>
      )
    }
    if (error) {
      return (
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Text style={{ color: 'red', paddingBlock: 20, alignSelf: 'center'}}>
              Error: {error.message}
            </Text>
          </SafeAreaView>
        </SafeAreaProvider>
      )
    }
    return (
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <ScrollView className="flex-1">
              <Text style={{ color: 'black', paddingBlock: 20, alignSelf: 'center'}}>
                WELCOME TO MY APP BIATCCCHHH $$
              </Text>
              <View
                style={{ margin: 'auto'}}
                className="flex-row items-center rounded-full px-5 py-4"
              >
                <SearchBar
                  refetchMovies={refetch}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </View>
              <View>
                {movies && (
                  <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MovieCard {...item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
                  />
                )}
                {/* { movies && movies.map((movie: any) => (
                  <MovieCard
                    key={movie.id.toString()}
                    {...movie}
                  />
                )) } */}
              </View>
            </ScrollView>
          </SafeAreaView>

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: 'row',
      // justifyContent: 'flex-start',
      // alignItems: 'center',
    },
})
