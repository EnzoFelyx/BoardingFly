import { ImageBackground, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import QRCode from 'react-native-qrcode-svg';
import Svg, { Line, Circle } from 'react-native-svg';

import { styles } from './styles';
import { Flight } from '@/components/flight';
import { Info } from '@/components/info';
import { colors } from '@/styles/colors';

export function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.header} source={require("@/assets/background1.jpg")}>
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

                    <View style={styles.details}>
                        <View style={styles.inLine}>
                            <Info label='Data' value='23 de Nov.' />
                            <Info label='Embarque' value='19:22' />
                        </View>
                    </View>

                </View>

                <View>
                    <Svg height={20} width={"100%"}>
                        <Line 
                        x1="0%" y1="50%" x2="100%" y2="50%" 
                        stroke={colors.gray[400]}
                        strokeWidth={1}
                        strokeDasharray={"5,5"}
                        />

                        <Circle r={8} cx={"0%"} cy={"50%"} fill={colors.black} />
                        <Circle r={8} cx={"100%"} cy={"50%"} fill={colors.black} />
                    </Svg>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerContent}>

                        <View style={styles.inLine}>
                            <Info label='Voo' value='JE 203' />
                            <Info label='Assento' value='42F' />
                        </View>

                        <View style={styles.inLine}>
                            <Info label='Terminal' value='2' />
                            <Info label='Portão' value='22' />
                        </View>

                    </View>

                    <QRCode value='boarding code' size={130} />

                </View>

            </View>
        </View>
    );
}
