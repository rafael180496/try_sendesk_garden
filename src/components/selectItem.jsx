import {
  Dropdown,
  Field,
  Item,
  Label,
  Menu,
  Select,
} from "@zendeskgarden/react-dropdowns";

const SelectItem = ({
  name,
  data,
  selectedItem,
  setSelectedItem,
  keyName = "value",
  labelName = "label",
}) => {
  return (
    <Dropdown key={keyName+"dp"}
      selectedItem={selectedItem}
      onSelect={setSelectedItem}
      downshiftProps={{ itemToString: (item) => item && item[labelName] }}
    >
      <Field>
        <Label>{name}</Label>
        <Select key={keyName+"sl"}>{selectedItem[labelName]}</Select>
      </Field>
      <Menu>
        {data.map((option) => (
          <Item key={option[keyName]+option[labelName]} value={option}>
            {option[labelName]}
          </Item>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default SelectItem;
