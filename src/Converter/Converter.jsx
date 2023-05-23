import './convert.css';
import { useState } from 'react';

export const Converter = () => {
  const [form, setForm] = useState({
    hex: '',
  });
  const [rgb, setRgb] = useState({
    r: 140,
    g: 140,
    b: 140,
  });

  const hexToRgb = (str) => {
    var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(str);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const result = hexToRgb(form.hex);
    setRgb(result);
  }

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  return (
    <div className="converter" style={rgb && {backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}}>
      <form className="convert-form" onSubmit={submitHandler}>
        <input type="text" id="hex" name="hex" value={form.hex} onChange={changeHandler}/>
        <button type="submit" className="convert-btn" 
          style={rgb === null ? {backgroundColor: `rgba(${144}, ${21}, ${21}, ${0.9})`} : null
        } > {
          rgb 
          ? (`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
          : "Ошибка!"
        }</button>
      </form>
    </div>
  );
};
