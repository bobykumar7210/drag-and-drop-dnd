import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import  Column  from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
class App extends Component{
  state =initialData;

  onDragEnd=result=>{
    //code for end
  }
  render(){
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => {
            return this.state.tasks[taskId];
          });
          return <Column key={columnId} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
    
    
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


