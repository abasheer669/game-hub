import { MenuItem } from "@chakra-ui/react";
import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}
const SortSelector = ({onSelectSortOrder , sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button rightIcon={<BsChevronDown />}>Order by: {currentSortOrder?.label || 'Relevance'}</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
              {order.label}
            </MenuItem>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
