import './App.css';
import Task from './tasks/Task';
import { Converter } from './Converter/Converter';
import { Workout } from './Workout/Workout';
import { PhotoManager } from './PhotoManager/PhotoManager';

function App() {
  return (
    <div className='main'>
      <header className='title'>
        <h1>Домашнее задание к теме &quot;Формы&quot;</h1>
      </header>
      <Task title={"Задача 1"} component={<Converter />}/>
      <Task title={"Задача 2"} component={<Workout />}/>
      <Task title={"Задача 3"} component={<PhotoManager />}/>
    </div>
  )
}

export default App
