import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import  Column  from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
class App extends Component{
  state =initialData;

  onDragEnd = result => {
    console.log("" ,result);
    const { destination, source, draggableId } = result;
 
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
     ) {
      return;
     }
     const column=this.state.columns[source.droppableId]
     const newTaskIds=Array.from(column.taskIds);
     newTaskIds.splice(source.index,1);
     newTaskIds.splice(destination.index,0,draggableId)

     const newColumn={
       ...column,
       taskIds:newTaskIds
     }
     const newState={

       ...this.state,
       columns:{
         ...this.state.columns,
         [newColumn.id]:newColumn
       }

     }
     this.setState(newState);
    
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


