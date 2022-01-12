import React, { Component } from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
const Container = styled.div`
 margin: 8px;
 border: 1px solid lightgrey;
 border-radius: 2px
`;
const Title = styled.h3`
 padding: 8px;
`;
const TaskList = styled.div`
 padding: 8px;
`;
export default class Column extends React.Component {
    render() {
      return (
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {provided =>( 
                <TaskList
                ref={provided.innerRef} 
                innerRef={provided.innerRef} 
                {...provided.dragHandleProps}
                {...provided.droppableProps}
               >
                {this.props.tasks.map((task,index) => <Task key={task.id} index={index} task={task} />)}
                {provided.placeholder}
               </TaskList>
            )}
          </Droppable>
        </Container>
      );
    }
}