import { start } from "./start";
import { useState } from "react";
import PropTypes from 'prop-types';
import { WorkoutTodoItem } from "./WorkoutTodoItem";

export const WorkoutTodo = ({item, clickChangeList}) => {

  const [items, setItems] = useState(start);
 
  if (!item.id && item.date !== '') {
    const elem = items.find(el => el.date === item.date);
     elem 
    ? elem.km += parseFloat(item.km)
    : items.push({id: String(item.date), date: item.date, km: +item.km});
  }

  const onClickDelete = (id) => {
    item.date = '';
    setItems(items.filter(el => el.id !== id));    
  }

  const onClickChange = (item) => {
    clickChangeList(item);
  }

  items.sort(((a, b) => b.date - a.date))
  
  return (
    <div className="wkt-todo">
      <div className="wkt-todo-signature">
        <div className="item-date">Дата ДД.ММ.ГГ</div>
        <div className="item-km">Пройдено км</div>
        <div className="item-change">Действия</div>
      </div>
      <ul className="wkt-todo-list">
        {items.map(el => (
          <WorkoutTodoItem 
            key={el.id} 
            item={el} 
            clickDelete={onClickDelete}
            clickChange={onClickChange}
          />
        ))}
      </ul>
    </div>
  );
};

WorkoutTodo.propTypes = {
  item: PropTypes.object,
  clickChangeList: PropTypes.func
}
