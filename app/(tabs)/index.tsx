import SearchBar from "@/components/SearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  // Index page route name is 'Home' by default
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <ScrollView className="flex-1">
              {/* <Image source={bgImg} style={{ width: '100%', height: '100%', position: 'absolute'}}/>r */}
              <Text style={{ color: 'black', paddingBlock: 20, alignSelf: 'center'}}>
                WELCOME TO MY APP BIATCCCHHH $$
              </Text>

              <View
                // style={{ justifyContent: 'flex-start', alignSelf: 'flex-start'}}
              >
                <SearchBar />
              </View>
            </ScrollView>
          </SafeAreaView>

        </SafeAreaProvider>
      </QueryClientProvider>
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
