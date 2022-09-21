import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './todo/component/todo-list';

class Index extends React.Component {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index/>);
