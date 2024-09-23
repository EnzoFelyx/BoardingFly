import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { Flight } from '@/components/flight';

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
                        <Flight label='Rio de Janeiro' value='FAE'/>
                        <Flight label='Japão' value='JFD'/>
                    </View>
                </View>
            </View>
        </View>
    );
}
