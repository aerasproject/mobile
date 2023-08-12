import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#22BDF4', '#0067E9']}
          style={styles.header}
        >
          <Text style={{ fontSize: 30, fontWeight: "500", color: '#ffffff' }}>
            Você em dia com as obrigações do seu negócio
          </Text>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={{ fontSize: 16, lineHeight: 24 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempus maximus dui mollis consectetur. Pellentesque convallis
            egestas neque ac scelerisque. Donec eleifend posuere lectus, sed
            dignissim arcu congue vitae. Sed nec tempus purus. Sed sem
            libero, consequat sit amet lacus non, pulvinar placerat erat.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    height: 304,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 45,
    backgroundColor: '#DBF2FF',
  },
});

