import Search from "assets/icons/search.svg";
import Notifications from "assets/icons/notifications.svg";
import { Image } from "react-native";
import { ThemedView } from "common/components/ThemedView";

const Header = () => {
  return (
    <ThemedView className="flex-row gap-5 items-center">
      <Notifications width={28} height={28} />
      <Search width={28} height={28} />
      <Image
        source={require("assets/images/user.jpg")}
        width={24}
        height={24}
        alt="user profile"
        className="rounded-full w-7 h-7"
      />
    </ThemedView>
  );
};

export default Header;
