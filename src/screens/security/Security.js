import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopHeader from "../../components/topHeader/TopHeader";

export default function Security(props) {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <TopHeader navigation={navigation} isHome={false} title="Security" />

      <ScrollView style={{ flex: 1, paddingHorizontal: 50, paddingBottom: 20 }}>
        <View style={styles.secImageView}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../../../assets/Management_Security-512.png")}
          />
        </View>

        <View>
          <Text style={styles.secTitle}> SAVDO SHARTLARI </Text>
          <Text style={styles.secSubTitle}>
            {" "}
            Ushbu standart sotuv shartlari ("Sotish shartlari") elektron hujjat
            shaklidagi elektron shartnoma hisoblanadi. Ushbu sotuv shartlari
            uchun mahalliy qonunchilikdan tashqari jismoniy, elektron yoki
            raqamli imzo talab etilmaydi.{" "}
          </Text>
        </View>

        <View style={styles.secImageView}>
          <Image
            style={{ width: 200, height: 200, marginVertical: 20 }}
            source={require("../../../assets/9436596671553508656-512.png")}
          />
        </View>

        <View>
          <Text style={styles.secSubTitle}>
            Ushbu sotuv shartlari sotuvchi oʻz mahsulotlarini veb-sayt orqali
            taklif etganda va xaridor ushbu taklifni qabul qilib veb-saytda
            taklif etilgan mahsulotni sotib olishga rozi boʻlganda xaridor va
            sotuvchi oʻrtasidagi yuridik majburiy hujjat hisoblanadi. Ushbu
            sotuv shartlari sotuvchining mahsulotini veb-saytda reklama,
            namoyish va taklif qilishiga nisbatan amal qiladi va majburiy
            hisoblanadi, shuningdek, ular sotuvchi tomonidan taklif etilgan
            mahsulotlarni xarid qilishga rozilik bildirgan xaridor uchun ham
            amal qiladi va majburiy hisoblanadi.{" "}
          </Text>
        </View>

        <View style={{ marginBottom: 40 }}>
          <Text style={styles.secSubTitle}>
            Sizdan har qanday mahsulotni taklif qilish yoki har qanday
            mahsulotni sotib olishdan oldin ahamiyat bilan ushbu sotuv shartlari
            bilan tanishishni iltimos qilamiz. Ushbu sotuv shartlari turli
            shartnomalar, shartlar, maʼlumotlarga kirish siyosati, veb-saytdan
            foydalanish shartlari va boshqa qoidalarga qoʻshimcha hisoblanadi.
            Sotuvchi mahsulotni veb-saytga joylayotganda taklif etganda yoki
            taʼriflaganda qoʻshimcha yoki bir-biriga zid shartlar qoʻshishi
            mumkin (“qoʻshimcha sotuv shartlari”). Agar ushbu sotuv shartlari
            bilan qoʻshimcha sotuv shartlari oʻrtasida zidlik yuzaga kelsa,
            qoʻshimcha sotuv shartlari ushbu zid qism va aniq bir bitimga
            nisbatan hal qiluvchi kuchga ega boʻladi. Agar sotuvchi ushbu sotuv
            shartlariga rozi boʻlmasa, veb-saytda hech qanday mahsulotlarni
            joylamasligini va taklif etmasligini soʻraymiz, shuningdek, xaridor
            ushbu qoʻshimcha sotuv shartlariga rozi boʻlmasa, ushbu veb-saytda
            joylangan hech qanday mahsulotlarni xarid qilmaslikni va bunga
            urinmaslikni soʻraymiz.{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  secImageView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },

  secTitle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    color: "grey",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },

  secSubTitle: {
    color: "grey",
    textAlign: "center",
  },
});
