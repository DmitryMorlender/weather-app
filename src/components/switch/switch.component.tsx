import React from 'react';
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri';
import ReactSwitch from 'react-switch';
import { HandleIcon } from './switch.styles';

interface ISwitchProps {
  onChange: (checked: boolean, event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string) => void;
  isChecked?: boolean;
}
export const Switch: React.FC<ISwitchProps> = ({ isChecked = false, onChange }) => {
  return (
    <ReactSwitch
      offColor="#000"
      onColor="#000"
      uncheckedHandleIcon={
        <HandleIcon>
          <RiFahrenheitFill size={20} />
        </HandleIcon>
      }
      checkedHandleIcon={
        <HandleIcon>
          <RiCelsiusFill size={20} />
        </HandleIcon>
      }
      checked={isChecked}
      onChange={onChange}
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
};
