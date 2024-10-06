import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const data = [
  {
    id: 1,
    img: require("../../assets/imgs/giacchuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
  {
    id: 2,
    img: require("../../assets/imgs/daynguon.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
  {
    id: 3,
    img: require("../../assets/imgs/dauchuyendoipsps.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
  {
    id: 4,
    img: require("../../assets/imgs/dauchuyendoi.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
  {
    id: 5,
    img: require("../../assets/imgs/carbusbtops2.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
  {
    id: 6,
    img: require("../../assets/imgs/daucam.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
  {
    id: 7,
    img: require("../../assets/imgs/giacchuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
  {
    id: 8,
    img: require("../../assets/imgs/daynguon.png"),
    name: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    price: "20.000",
    percent_discount: "50%",
  },
];
const Item = ({ data }) => {
  return (
    <View style={styles.item}>
      <Image
        source={data.img}
        style={{ resizeMode: "cover", height: 90, width: 155 }}
      />
      <Text
        style={{ fontSize: 12, marginTop: 9 }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {data.name}
      </Text>
      <View style={[styles.star, { marginTop: 4 }]}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Image
            key={index}
            source={require("../../assets/icons/star.png")}
            style={{ width: 13, height: 13 }}
          />
        ))}
        <Image
          source={require("../../assets/icons/star_none.png")}
          style={{ width: 13, height: 13 }}
        />
        <Text style={{ fontSize: 10, color: "#000" }}>(15)</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 4 }}>
        <Text style={{ fontWeight: 700, fontSize: 12 }}>{data.price}</Text>
        <Text style={{ fontSize: 12, color: "#969DAA", marginLeft: 16 }}>
          {data.percent_discount}
        </Text>
      </View>
    </View>
  );
};
export default function Screen2() {
  const renderItem = ({ item }) => {
    return <Item data={item} />;
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
        <View style={styles.searchSection}>
          <Image
            source={require("../../assets/icons/search.png")}
            style={styles.img_icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../assets/icons/bi_cart-check.png")}
            style={styles.img_icon}
          />
          <View
            style={{
              width: 17,
              height: 17,
              background: "#E93838",
              position: "absolute",
              top: -6,
              right: -6,
              borderRadius: "50%",
            }}
          ></View>
        </View>
        <Image source={require("../../assets/icons/dot.png")} />
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
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
  searchSection: {
    width: 192,
    paddingLeft: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    outlineStyle: "none",
  },
  item: {
    padding: 8,
    width: 170,
  },
  star: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 3,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
