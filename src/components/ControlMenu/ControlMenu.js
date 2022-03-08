import { Select } from './Styles';

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((it, idx) => (
          <option value={it.value} key={idx}>
            {it.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default ControlMenu;