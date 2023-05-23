import './workout.css';
import { WorkoutForm } from './WorkoutForm';
import { WorkoutTodo } from './WorkoutTodo';
import { useState } from 'react';


export const Workout = () => {
  const [item, addItem] = useState({date: '', km: ''});
  const [data, setData] = useState({date: '', km: ''});

  const submitHandle = ({date, km}) => {
    const dd = new Date(
      '20' + date.slice(-2) 
      + '-' + date.slice(3, 5) 
      + '-' + date.slice(0, 2)
      ).getTime()
    setData({date: '', km: ''})
    addItem({date: dd, km: +km});
  }
  const onClickChange = (incoming) => {
    const date = new Date(incoming.date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    })
    item.date = '';
    item.km = '';
    setData({date: date, km: incoming.km})
  }

  return (
    <div className="workout">
      <WorkoutForm data={data} submitHandle={submitHandle}/>
      <WorkoutTodo item={item} clickChangeList={onClickChange}/>
    </div>
  );
};
