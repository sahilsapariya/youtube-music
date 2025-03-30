import { ThemedText } from "common/components/ThemedText";
import { ThemedView } from "common/components/ThemedView";
import ScreenWrapper from "common/wrappers/ScreenWrapper";
import React, { useContext } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import RightArrowIcon from "assets/icons/chevron-right.svg";
import { ThemeContext } from "common/context/ThemeContext";
import AccountBoxIcon from "assets/icons/account/account-box.svg";
import DownloadIcon from "assets/icons/account/download.svg";
import HistoryIcon from "assets/icons/account/history.svg";
import SwitchAccountIcon from "assets/icons/account/switch-account.svg";
import SettingsIcon from "assets/icons/account/settings.svg";
import HelpIcon from "assets/icons/account/help.svg";

const Account: React.FC = () => {
  const { iconColor } = useContext(ThemeContext);

  const features: Array<{ icon: () => React.ReactElement; title: string }> = [
    {
      icon: () => <AccountBoxIcon fill={iconColor} width={28} height={28} />,
      title: "Your Channel",
    },
    {
      icon: () => <DownloadIcon fill={iconColor} width={28} height={28} />,
      title: "Downloads",
    },
    {
      icon: () => <HistoryIcon fill={iconColor} width={28} height={28} />,
      title: "History",
    },
    {
      icon: () => <SwitchAccountIcon fill={iconColor} width={28} height={28} />,
      title: "Switch Account",
    },
    {
      icon: () => <SettingsIcon fill={iconColor} width={28} height={28} />,
      title: "Settings",
    },
    {
      icon: () => <HelpIcon fill={iconColor} width={28} height={28} />,
      title: "Help and feedback",
    },
  ];

  return (
    <ScreenWrapper>
      <>
        <ThemedView style={styles.userInfoContainer}>
          <ThemedView style={styles.rowDivider}>
            <ThemedView style={styles.imageWrapper}>
              <Image
                source={require("assets/images/user.jpg")}
                style={styles.profileImage}
              />
            </ThemedView>

            <ThemedView style={styles.userDetails}>
              <ThemedText style={styles.userName}>Sahil Sapariya</ThemedText>
              <ThemedText style={styles.userId}>@sahilsapariya2342</ThemedText>
            </ThemedView>

            <ThemedView style={styles.arrowWrapper}>
              <RightArrowIcon fill={iconColor} />
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.rowDivider}>
            <ThemedView style={styles.imageWrapper} />
            <ThemedView style={styles.googleAccountTextContainer}>
              <ThemedText style={styles.googleAccountText}>
                Manage your Google Account
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.arrowWrapper} />
          </ThemedView>
        </ThemedView>

        <ThemedView
          style={styles.containerSeparator}
          lightBorderColor="#444"
          darkBorderColor="#444"
        ></ThemedView>

        <ThemedView style={styles.featuresContainer}>
          {features.map((feature, index) => {
            return (
              <ThemedView style={styles.feature} key={index}>
                {feature.icon()}
                <ThemedText type={"label"}>{feature.title}</ThemedText>
              </ThemedView>
            );
          })}
        </ThemedView>

        <ThemedView style={styles.musicPremiumContainer}>
          <ThemedView style={{ position: "relative" }}>
            <ThemedText
              style={{
                color: "grey",
                padding: 15,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Enjoy ad-free music, listen in audio mode and play music offline.
            </ThemedText>

            <ThemedText style={styles.musicPremiumButton} type={"label"}>
              No Music Premium Needed
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  musicPremiumContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  musicPremiumButton: {
    padding: 15,
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
    textAlign: "center",
    color: "white",
  },
  featuresContainer: {
    paddingHorizontal: 15,
    flexDirection: "column",
    paddingVertical: 5,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingVertical: 10,
  },
  userInfoContainer: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  rowDivider: {
    flexDirection: "row",
    width: "100%",
  },
  imageWrapper: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 20,
  },
  userDetails: {
    flex: 9,
    justifyContent: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userId: {
    fontSize: 14,
    color: "#888",
  },
  arrowWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyCell: {
    flex: 1,
  },
  googleAccountTextContainer: {
    flex: 9,
  },
  googleAccountText: {
    color: "blue",
    fontSize: 14,
  },
  containerSeparator: {
    width: "100%",
    borderBottomWidth: 1,
    borderWidth: 0,
  },
});

export default Account;
