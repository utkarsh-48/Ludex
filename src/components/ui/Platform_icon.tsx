import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { platform } from "@/components/Gamegrid";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platform: platform[];
}

const Platform_icon = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    andriod:FaAndroid
  };

  return (
    <div className="flex items-center gap-2 px-6 pb-4">
      {platform.map((p) => {
        const IconComponent = iconMap[p.slug];
        return IconComponent ? (
          <IconComponent
            key={p.id}
            className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors"
          />
        ) : null;
      })}
    </div>
  );
};

export default Platform_icon;