import React, { useContext } from 'react'
import "./Navbar.css"
import { NodeContext } from '../context/NodeContext';

const Navbar = ({ handleSubmit, error }) => {
  const { selected, setSelected, selectedId, setSelectedId, settingValue, setSettingValue } = useContext(NodeContext);

  return (
    <div className="navbar">
      <div className="navbar-left">
        {error && <div className="save-error">
            <p>Cannot save Flow</p>
          </div>}
      </div>
      <div className="navbar-right">
        <button className="save-button" onClick={() => {
          handleSubmit(selectedId, settingValue);
          setSelectedId(null);
          setSelected(false);
          setSettingValue('');
        }}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Navbar