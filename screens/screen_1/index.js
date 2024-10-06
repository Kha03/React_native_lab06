import { Image, StyleSheet, Text, View } from "react-native";

const item = (props) => {
  return (
    <View style={[,{}]}>
      <Image />
      
    </View>
  );
}


export default function Screen1() {
  const data = [{
    id: 1,
    img: require('../../assets/imgs/ca_nau_lau.png'),
    name: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
    nameShop: 'DeVang',
  },
,{
  id: 2,
  img: require('../../assets/imgs/ga_bo_toi.png'),
  name: '1kg Khô Gà Bó Toi - Gà Bó Toi Khô',
  nameShop: 'LTD Food',
},{
  id: 3,
  img: require('../../assets/imgs/xa_can_cau.png'),
  name: 'Xe Cần Cẩu Xe Ô Tô Xe Xúc Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô',
  nameShop: 'The Gioi Do Choi',
},{
  id: 4,
  img: require('../../assets/imgs/do_choi_dang_mo_hinh.png'),
  name: 'Ddo choi dang mo hinh',
  nameShop: 'The Gioi Do Choi',
},{
  id: 5,
  img: require('../../assets/imgs/lanh_dao_gian_don.png'),
  name: 'Lanh dao gian don',
  nameShop: 'Minh Long Book',
},{
  id: 6,
  img: require('../../assets/imgshieu_long_con_tre.png'),
  name: 'Hieu long con tre',
  nameShop: 'Minh Long Book',
},{
  id: 7,
  img: require('../../assets/imgs/trump_1.png'),
  name: 'Donald Trump',
  nameShop: 'DeVang',
},{
  id: 8,
  img: require('../../assets/imgs/trump_1.png'),
  name: 'Donald Trump',
  nameShop: 'DeVang',
}]
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