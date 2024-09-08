import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Box } from "../Box";
import Menu from "@mobile/assets/menu.svg";
import Weather from "./ViewWeather/ViewWeather";
import imageURL from "@mobile/assets/Ellipse5.png";
import { lightTheme } from "@mobile/theme";
import CloseButton from "@mobile/assets/closeButton.svg";
import { AppContext, useAppContext } from "@contexts/AppContext";
import { getUserById } from "@mobile/services/UserService"; // Certifique-se de ter essa função implementada
import DarkModeMoonSVG from "@mobile/assets/DarkModeMoon.svg";
import MapVersionSVG from "@mobile/assets/mapMenuSVG.svg";
import StarIconSVG from "@mobile/assets/StarMenuSVG.svg";
import SettingIconMenuSVG from "@mobile/assets/SettingsMenuSVG.svg";
import ArrowIconSVG from "@mobile/assets/ArrowMenuSVG.svg";

const MenuDrawner = ({ cityName }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { state = {}, setState = () => {} } = useContext(AppContext) || {};
  const [userData, setUserData] = useState({
    email: state.user?.email || "",
    name: state.user?.name || "",
    city: state.user?.city || "",
    state: state.user?.state || "",
  });
  const { user, setUser } = useAppContext();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          console.log("Buscando dados do usuário com ID:", user.id);
          const data = await getUserById(user.id);
          console.log("Dados do usuário recebidos:", data);
          setUserData({
            email: data.email || "No email available",
            name: data.name || "Guest User",
            city: data.city || "",
            state: data.state || "",
          });
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      } else {
        console.log("ID do usuário não definido ainda.");
      }
    };

    fetchUserData();
  }, [user?.id]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLogout = () => {
    // Clear the user data from the context
    setState({ user: null });
    // Optionally navigate to the login screen
    Alert.alert("Logout", "You have been logged out.");
    closeModal();
  };

  return (
    <Box
      flexDirection="row"
      width={100}
      pdHorizontal={1.5}
      alignItems="center"
      justifyContent="space-between"
      top={2}
    >
      <TouchableOpacity onPress={openModal}>
        <Menu width={50} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <CloseButton width={24} />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
              <Image source={imageURL} style={styles.userImage} />
              <Text style={styles.profileName}>{userData.name}</Text>
              <Text>User Email: {userData.email}</Text>
              <Text style={styles.cityName}>
                {userData.city
                  ? `${userData.city} - ${userData.state}`
                  : "Location not set"}
              </Text>
            </View>
            <View style={styles.menuItems}>
              <View style={styles.menuItem}>
                <DarkModeMoonSVG />
                <Text style={styles.textGray}>Dark Mode</Text>
                <Switch
                  style={styles.SwitchContainerDarkMode}
                  // value={darkMode}
                  // onValueChange={toggleDarkMode}
                  trackColor={{
                    false: "#767577",
                    true: lightTheme.colors.primary,
                  }}
                  // thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
                  thumbColor={"#f4f3f4"}
                />
              </View>
              <View style={styles.menuItem}>
                <MapVersionSVG />
                <Text style={styles.textBlue}>Versão com mapa</Text>
                <Switch
                  style={styles.SwitchContainer}
                  // value={showMap}
                  // onValueChange={toggleShowMap}
                  trackColor={{
                    false: "#767577",
                    true: lightTheme.colors.primary,
                  }}
                  // thumbColor={showMap ? '#f5dd4b' : '#f4f3f4'}
                  thumbColor={"#f4f3f4"}
                />
              </View>
              <TouchableOpacity style={styles.menuItem}>
                <StarIconSVG />
                <Text style={styles.textFavorites}>Locais Favoritos</Text>
                <ArrowIconSVG />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <SettingIconMenuSVG />
                <Text style={styles.textSettings}>Configurações</Text>
                <ArrowIconSVG />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "75%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "blue",
    top: 50,
  },
  profileContainer: {
    marginBottom: 30,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: lightTheme.colors.primary,
  },
  cityName: {
    fontSize: 16,
    color: "#888",
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#d9534f",
    padding: 15,
    borderRadius: 5,
  },
  logoutText: {
    color: "#fff",
    textAlign: "center",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  textBlue: {
    color: lightTheme.colors.primary,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  textGray: {
    color: lightTheme.colors.textDisable,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  SwitchContainer: {
    paddingLeft: 90,
  },
  SwitchContainerDarkMode: {
    paddingLeft: 135,
  },
  textFavorites: {
    color: lightTheme.colors.primary,
    fontWeight: "bold",
    paddingRight: 110,
  },
  textSettings: {
    color: lightTheme.colors.primary,
    fontWeight: "bold",
    paddingRight: 120,
  },
});

export { MenuDrawner };
