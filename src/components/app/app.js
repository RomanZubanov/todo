import { useState } from 'react';

import Header from '../header';
import TaskList from '../task-list';
import Footer from '../footer';

import './app.css';

export default function App() {
  let maxID = 1;

  function createTodoItem(label) {
    return {
      label,
      timeTaskCreation: new Date(),
      completedTask: false,
      editingTask: false,
      timer: {
        timeStart: 0,
        timePause: 0,
        pauseSum: 0,
        working: false,
        activated: false,
      },
      id: maxID++,
    };
  }

  const [todoData, setTodoData] = useState([createTodoItem('fw'), createTodoItem('fw'), createTodoItem('fw')]);
  const [filter, setFilter] = useState('all');

  const onAddItem = (label) => {
    setTodoData((todoData) => [...todoData, createTodoItem(label)]);
  };

  const onCompleted = (id) => {
    setTodoData((todoData) =>
      todoData.map((item) => {
        if (item.id === id) {
          item.completedTask = !item.completedTask;
          return item;
        }
        return item;
      })
    );
  };

  const onFilter = (buttonName) => {
    setFilter(buttonName);
  };

  const onDeleted = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((item) => item.id === id);
      return [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
    });
  };

  const filterTodoData = (filter) => {
    if (filter === 'active') {
      return todoData.filter((item) => !item.completedTask);
    }
    if (filter === 'completed') {
      return todoData.filter((item) => item.completedTask);
    }
    return todoData;
  };

  const onClearCompleted = () => {
    setTodoData((todoData) => todoData.filter((item) => item.completedTask === false));
  };

  const todoCounterLeft = () => {
    return todoData.reduce((sum, item) => {
      if (!item.completedTask) sum += 1;
      return sum;
    }, 0);
  };

  const onEdited = (id) => {
    setTodoData((todoData) => {
      return todoData.map((item) => (item.id === id ? { ...item, editingTask: true } : item));
    });
  };

  const onSubmitEditing = (id, value) => {
    setTodoData((todoData) => {
      return todoData.map((item) => (item.id === id ? { ...item, label: value, editingTask: false } : item));
    });
  };

  const onTimerStart = (id, timeStart) => {
    setTodoData((todoData) => {
      return todoData.map((item) => {
        const { activated, working, timePause } = item.timer;
        let { pauseSum } = item.timer;
        if (id === item.id) {
          if (!activated) {
            return { ...item, timer: { ...item.timer, timeStart, activated: true, working: true } };
          }
          if (!working) {
            pauseSum += new Date().getTime() - timePause;
            return { ...item, timer: { ...item.timer, working: true, pauseSum } };
          }
        }
        return item;
      });
    });
  };

  const onTimerPause = (id, timePause) => {
    setTodoData((todoData) => {
      return todoData.map((item) => {
        const { working } = item.timer;
        if (id === item.id) {
          if (working) {
            return {
              ...item,
              timer: {
                ...item.timer,
                timePause,
                working: false,
              },
            };
          }
        }
        return item;
      });
    });
  };

  return (
    <section className="todoapp">
      <Header onAddItem={onAddItem} />
      <section className="main">
        <TaskList
          todos={filterTodoData(filter)}
          onCompleted={onCompleted}
          onDeleted={onDeleted}
          onEdited={onEdited}
          onSubmitEditing={onSubmitEditing}
          onTimerStart={onTimerStart}
          onTimerPause={onTimerPause}
        />
        <Footer onFilter={onFilter} onClearCompleted={onClearCompleted} todoCountLeft={todoCounterLeft()} />
      </section>
    </section>
  );
}
