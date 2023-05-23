import './task.css';
import PropTypes from 'prop-types';

const Task = ({ title, component }) => {
  return (
    <div className="task">
      <header className="task-title">
        <h2>{title}</h2>
      </header>
      {component}
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  component: PropTypes.element
}


export default Task;