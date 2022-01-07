import React, { useState } from 'react';
import './Banner.css';
import Switch from 'react-switch';
import { useDispatch } from 'react-redux';

function SwitchReact() {
  const [setTrue, setFalse] = useState(true);
  const dispatch = useDispatch();

  const onThemeSwitchChange = () => {
    if (setTrue) {
      setFalse(false);
      dispatch({ type: 'DARK' });
    } else {
      setFalse(true);
      dispatch({ type: 'LIGHT' });
    }
  };

  return (
    <Switch
      checked={setTrue}
      onChange={onThemeSwitchChange}
      offColor="#baaa80"
      onColor="#353535"
      className="react-switch mx-auto"
      width={90}
      height={40}
      uncheckedIcon={(
        <span
          className="iconify"
          data-icon="twemoji:owl"
          data-inline="false"
          style={{
            display: 'block',
            height: '100%',
            fontSize: 25,
            textAlign: 'end',
            marginLeft: '20px',
            color: '#353239',
          }}
        />
                )}
      checkedIcon={(
        <span
          className="iconify"
          data-icon="noto-v1:sun-with-face"
          data-inline="false"
          style={{
            display: 'block',
            height: '100%',
            fontSize: 25,
            textAlign: 'end',
            marginLeft: '10px',
            color: '#353239',
          }}
        />
      )}
      id="icon-switch"
    />
  );
}

export default SwitchReact;
