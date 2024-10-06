import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
const data = [
  {
    id: "1",
    img: require("../../assets/imgs/ca_nau_lau.png"),
    name: "Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!",
    nameShop: "DeVang",
  },
  {
    id: "2",
    img: require("../../assets/imgs/ga_bo_toi.png"),
    name: "1kg Khô Gà Bó Toi - Gà Bó Toi Khô",
    nameShop: "LTD Food",
  },
  {
    id: "3",
    img: require("../../assets/imgs/xa_can_cau.png"),
    name: "Xe Cần Cẩu Xe Ô Tô Xe Xúc Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô Xe Cần Cẩu Xe Đào Xe Xúc Xe Ô Tô",
    nameShop: "The Gioi Do Choi",
  },
  {
    id: "4",
    img: require("../../assets/imgs/do_choi_dang_mo_hinh.png"),
    name: "Ddo choi dang mo hinh",
    nameShop: "The Gioi Do Choi",
  },
  {
    id: "5",
    img: require("../../assets/imgs/lanh_dao_gian_don.png"),
    name: "Lanh dao gian don",
    nameShop: "Minh Long Book",
  },
  {
    id: "6",
    img: require("../../assets/imgs/hieu_long_con_tre.png"),
    name: "Hieu long con tre",
    nameShop: "Minh Long Book",
  },
  {
    id: "7",
    img: require("../../assets/imgs/trump_1.png"),
    name: "Donald Trump",
    nameShop: "DeVang",
  },
  {
    id: "8",
    img: require("../../assets/imgs/lanh_dao_gian_don.png"),
    name: "Donald Trump",
    nameShop: "DeVang",
  },
];
const Item = ({ props, background, color, onPress }) => {
  return (
    <View style={[styles.item_list, { height: 80, background: background }]}>
      <View style={{ width: 74, height: 74 }}>
        <Image source={props.img} style={styles.img_item} />
      </View>
      <View style={{ width: 143 }}>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {props.name}
        </Text>
        <Text style={{ marginTop: 13 }}>
          Shop <Text style={{ color: color }}>{props.nameShop}</Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 28,
            paddingVertical: 13,
            backgroundColor: "#F31111",
          }}
          onPress={onPress}
        >
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default function Screen1() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "transparent";
    const color = item.id === selectedId ? "red" : "black";
    return (
      <Item
        props={item}
        background={backgroundColor}
        color={color}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.flexRows,
          {
            width: "100%",
            paddingHorizontal: "16px",
            paddingTop: "6px",
            paddingBottom: "12px",
            backgroundColor: "#1BA9FF",
          },
        ]}
      >
        <Image
          source={require("../../assets/icons/ant-design_arrow-left-outlined.png")}
          style={styles.img_icon}
        />
        <Text style={{ color: "#fff", fontSize: "16px" }}>Chat</Text>
        <Image
          source={require("../../assets/icons/bi_cart-check.png")}
          style={styles.img_icon}
        />
      </View>
      <View
        style={{
          width: "100%",
          paddingTop: "17px",
          paddingHorizontal: "32px",
          paddingBottom: "12px",
          borderColor: "#C4C4C4",
          borderBottomWidth: "1px",
        }}
      >
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={[
          styles.flexRows,
          {
            width: "100%",
            paddingHorizontal: "16px",
            paddingTop: "6px",
            paddingBottom: "12px",
            backgroundColor: "#1BA9FF",
          },
        ]}
      >
        <Image source={require("../../assets/icons/more.png")} />
        <Image source={require("../../assets/icons/home.png")} />
        <Image source={require("../../assets/icons/back.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
  },
  flexRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img_icon: {
    width: 24,
    height: 24,
    objectFit: "cover",
  },
  img_item: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  item_list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 12,
  },
});
