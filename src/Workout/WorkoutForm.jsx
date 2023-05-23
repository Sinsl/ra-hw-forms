import { useState } from 'react';
import PropTypes from 'prop-types';

export const WorkoutForm = ({data, submitHandle}) => {

  const [dataInput, setDataInput] = useState({date: '', km: ''});

  if (data.date !== '' && data.km !== '') {
    setDataInput({date: data.date, km: data.km})
    data.date = '';
    data.km = '';
  }

  const changeHandle = ({target}) => {
    const { name, value } = target;
    setDataInput((prop) => ({...prop, [name]: value}))
  }

  const submitFormHandle = (e) => {
    e.preventDefault();
    submitHandle(dataInput);
    setDataInput({date: '', km: ''})
  }
  
  return (
    <form className="wkt-form" onSubmit={submitFormHandle}>
      <div className="wkt-form-main">
        <label className="wkt-form-data">
          <p>Дата ДД.ММ.ГГ</p>
          <input
            type="text" 
            name="date"
            value={dataInput.date}
            placeholder="15.10.22" 
            pattern="[0-9]{2}\.[0-1]{1}[0-9]{1}\.[0-2]{1}[0-9]{1}"
            onChange={changeHandle}
            required
          />
        </label>
        <label className="wkt-form-num">
          <p>Пройдено км</p>
          <input
            type="number" 
            name="km" step={0.1}
            value={dataInput.km}
            placeholder="12.25" 
            pattern="\d+(\.\d{2})?"
            onChange={changeHandle}
            required
          />
        </label>
        <button type="submit" className="wkt-btn">OK</button>
      </div>
    </form>
  );
}

WorkoutForm.propTypes = {
  data: PropTypes.object,
  submitHandle: PropTypes.func
}