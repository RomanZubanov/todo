import React, { Component } from 'react';

import Header from '../header';
import TaskList from '../task-list';
import Footer from '../footer';

import './app.css';

export default class App extends Component {
  maxID = 1;

  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task Done'),
      this.createTodoItem('To Drink Coffee'),
    ],
    filter: 'all',
  };

  createTodoItem(label) {
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
      id: this.maxID++,
    };
  }

  onAddItem = (label) => {
    this.setState(({ todoData }) => {
      return { todoData: [...todoData, this.createTodoItem(label)] };
    });
  };

  onCompleted = (id) => {
    this.setState(({ todoData }) => {
      return todoData.map((item) => {
        if (item.id === id) {
          item.completedTask = !item.completedTask;
          return item;
        } else {
          return item;
        }
      });
    });
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      let idx = todoData.findIndex((item) => item.id === id);
      return { todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)] };
    });
  };

  onFilter = (buttonName) => {
    this.setState({
      filter: buttonName,
    });
  };

  filterTodoData = (filter) => {
    if (filter === 'all') {
      return this.state.todoData;
    } else if (filter === 'active') {
      return this.state.todoData.filter((item) => !item.completedTask);
    } else if (filter === 'completed') {
      return this.state.todoData.filter((item) => item.completedTask);
    }
  };

  onClearCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => item.completedTask === false),
      };
    });
  };

  todoCounterLeft = () => {
    return this.state.todoData.reduce((sum, item) => {
      if (!item.completedTask) sum++;
      return sum;
    }, 0);
  };

  onEdited = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((item) => (item.id === id ? { ...item, editingTask: true } : item)),
      };
    });
  };

  onSubmitEditing = (id, value) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((item) => (item.id === id ? { ...item, label: value, editingTask: false } : item)),
      };
    });
  };

  onTimerStart = (idx, timeStart) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((item, id) => {
          let { activated, working, pauseSum, timePause } = item.timer;
          if (id === idx) {
            if (!activated) {
              return { ...item, timer: { ...item.timer, timeStart, activated: true, working: true } };
            }
            if (!working) {
              pauseSum += new Date() - timePause;
              return { ...item, timer: { ...item.timer, working: true, pauseSum } };
            }
          }
          return item;
        }),
      };
    });
  };

  onTimerPause = (idx, timePause) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((item, id) => {
          const { working } = item.timer;
          if (id === idx) {
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
        }),
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header onAddItem={this.onAddItem} />
        <section className="main">
          <TaskList
            todos={this.filterTodoData(this.state.filter)}
            onCompleted={this.onCompleted}
            onDeleted={this.onDeleted}
            onEdited={this.onEdited}
            onSubmitEditing={this.onSubmitEditing}
            onTimerStart={this.onTimerStart}
            onTimerPause={this.onTimerPause}
          />
          <Footer
            onFilter={this.onFilter}
            onClearCompleted={this.onClearCompleted}
            todoCountLeft={this.todoCounterLeft()}
          />
        </section>
      </section>
    );
  }
}
