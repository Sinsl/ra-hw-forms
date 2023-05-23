import PropTypes from 'prop-types';

export const WorkoutTodoItem = ({item, clickDelete, clickChange}) => {
  
  const onclickDelete = () => {
    clickDelete(item.id);
  }

  const onClickChange = () => {
    clickChange(item)
  }

  return (
    <li className="wkt-todo-item">
      <div className="item-date">{new Date(item.date).toLocaleDateString()}</div>
      <div className="item-km">{item.km.toFixed(1)}</div>
      <div className="item-change">
        <span onClick={onClickChange}>&#9998;</span>
        <span onClick={onclickDelete}>&#10008;</span>
      </div>
    </li>
  );
};

WorkoutTodoItem.propTypes = {
  item: PropTypes.object,
  clickDelete: PropTypes.func,
  clickChange: PropTypes.func
}
