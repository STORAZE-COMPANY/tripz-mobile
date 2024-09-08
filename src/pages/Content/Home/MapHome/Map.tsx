import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import PINSVG from "@mobile/assets/pin.svg";
import Icon1 from "@mobile/assets/icon1.svg";
import Icon2 from "@mobile/assets/icon2.svg";
import Icon3 from "@mobile/assets/icon3.svg";
import Icon4 from "@mobile/assets/icon4.svg";

function CustomMap() {
  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [{ color: "white" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#746855" }],
    },
    // Adicione outros estilos conforme necessário
  ];

  const markers = [
    {
      coordinate: { latitude: -23.561684, longitude: -46.625378 },
      title: "Chácara Cachoeiras",
      description: "Estrada Ibura, Nº 1234, Jardim Pedreiro",
      icon: require("@mobile/assets/icon.png"), // Ajuste o caminho do ícone conforme necessário
    },
  ];

  const popularLocations = [
    {
      title: "Pedra Três Pontões",
      description: "Rua Afonso, Nº 33, Jardim Jordão",
      rating: 5,
      image: require("@mobile/assets/cidadeexample.png"),
    },
    {
      title: "Cachoeira Bonita",
      description: "Rua Senório Albuquerque, 88",
      rating: 4.5,
      image: require("@mobile/assets/cidadeexample.png"),
    },
    {
      title: "Pedra do Cruzeiro",
      description: "Rua São Francisco, 123",
      rating: 4,
      image: require("@mobile/assets/cidadeexample.png"),
    },
  ];

  const CustomMarker = ({ title }: { title: string }) => (
    <View style={styles.customMarker}>
      <View>
        <PINSVG />
      </View>
      <View style={styles.markerTextContainer}>
        <Text style={styles.markerTitle}>{title}</Text>
        <View style={styles.markerIcons}>
          <Icon1 width={20} height={20} />
          <Icon2 width={20} height={20} />
          <Icon3 width={20} height={20} />
          <Icon4 width={20} height={20} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: -23.561684,
          longitude: -46.625378,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker.coordinate}>
            <CustomMarker title={marker.title} />
          </Marker>
        ))}
      </MapView>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." />
      </View>
      <FlatList
        style={styles.popularList}
        data={popularLocations}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularItemImage} />
            <View style={styles.popularItemTextContainer}>
              <Text style={styles.popularItemTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{"⭐".repeat(item.rating)}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  customMarker: {
    flexDirection: "row",
    alignItems: "center",
  },
  markerIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD700",
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  markerIcon: {
    width: 30,
    height: 30,
  },
  markerTextContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  markerTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  markerIcons: {
    flexDirection: "row",
  },
  markerIconSmall: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  popularList: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    paddingLeft: 10,
  },
  popularItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
    alignItems: "center",
  },
  popularItemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  popularItemTextContainer: {
    flex: 1,
  },
  popularItemTitle: {
    fontWeight: "bold",
  },
});

export { CustomMap };
