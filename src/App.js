import React from 'react';
import AddTodo from './components/containers/AddTodo';
import VisibleTodoList from './components/containers/VisibleTodoList';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
