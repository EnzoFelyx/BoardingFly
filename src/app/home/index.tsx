import { ImageBackground, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import { styles } from './styles';
import { Flight } from '@/components/flight';
import { colors } from '@/styles/colors';

export function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.header} source={require("@/assets/background.jpg")}>
                <Text style={styles.title}>Cartão de embarque</Text>
                <Text style={styles.subtitle}>Faltam 31 dias para sua viagem!</Text>
            </ImageBackground>

            <View style={styles.ticket}>
                <View style={styles.content}>
                    <View style={styles.flight}>
                        <Flight label='Rio de Janeiro' value='GIG' />

                        <View style={styles.duration}>
                            <Ionicons name='airplane-sharp' size={32} color={colors.black} />
                            <Text style={styles.hours}>27 h 53 min</Text>
                        </View>

                        <Flight label='Japão' value='JFD' />
                    </View>

                    <Text style={styles.label}>Passageiro</Text>
                    <Text style={styles.name}>Enzo Felix dos Santos</Text>

                </View>
            </View>
        </View>
    );
}
