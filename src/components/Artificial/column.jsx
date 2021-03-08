import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  margin: 8px;

  border-radius: 2px;
  width: 150px;
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(140,161,216,255);
  
`;
const Title = styled.h3`
  padding: 8px;
  
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
  background  rgba(140,161,216,255);
  border-radius: 10px;
`;

export default class Column extends React.Component {
  render() {
    
    return (
      <Container className={this.props.column.id}>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                
                <Task key={task.id} task={task} index={index} />
                
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
