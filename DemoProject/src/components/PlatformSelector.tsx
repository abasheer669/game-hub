import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";
import { Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (Platform: Platform) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button rightIcon={<BsChevronDown />}>Platforms</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
