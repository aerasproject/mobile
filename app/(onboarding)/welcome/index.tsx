import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Você em dia com as obrigações do seu negócio
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tempus maximus dui mollis consectetur. Pellentesque convallis
          egestas neque ac scelerisque. Donec eleifend posuere lectus, sed
          dignissim arcu congue vitae. Sed nec tempus purus. Sed sem
          libero, consequat sit amet lacus non, pulvinar placerat erat.
        </Text>
      </View>
    </SafeAreaView>
  );
}
