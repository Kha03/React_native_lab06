import { Image, StyleSheet, Text, View } from "react-native";

export default function Screen1() {
  return (
    <View style={styles.container}>
     <View style={[styles.flexRows,{width: '100%',
     paddingHorizontal: '16px', paddingTop: '6px',
      paddingBottom: '12px',backgroundColor: '#1BA9FF'}]}>
        <Image
          source={require('../../assets/icons/ant-design_arrow-left-outlined.png')}
          style={styles.img_icon}
        />
        <Text style={{color: '#fff', fontSize: '16px'}}>Chat</Text>
        <Image
          source={require('../../assets/icons/bi_cart-check.png')}
          style={styles.img_icon}
        />
     </View>
     <View style={{width: '100%', paddingTop: '17px',
      paddingHorizontal: '32px', paddingBottom: '12px',
       borderColor:"#C4C4C4", borderBottomWidth: '1px'}}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
    },
    flexRows: {
        flexDirection: 'row',justifyContent: 'space-between', alignItems:'center'
    },
    img_icon: {
        width: 24,
        height: 24,
        objectFit: 'cover',
    },
});