import React from 'react';
import { RiCelsiusFill, RiFahrenheitFill } from 'react-icons/ri';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';
import { HandleIcon } from './switch.styles';

interface ISwitchProps extends ReactSwitchProps {
  onChange: (checked: boolean, event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string) => void;
  checked: boolean;
}
export const Switch: React.FC<ISwitchProps> = ({ checked = false, onChange, ...props }) => {
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
      checked={checked}
      onChange={onChange}
      uncheckedIcon={false}
      checkedIcon={false}
      {...props}
    />
  );
};
