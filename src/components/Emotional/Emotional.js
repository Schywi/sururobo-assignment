import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class Emotional extends React.Component {
  state = initialData;

  sendData = (taskId) => {
  
    const task = this.state.tasks[taskId]
    const emotional = task.content
   
    this.props.parentCallback({emotionalData : emotional});
  }   

  onDragEnd = result => {
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

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
 

  

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
     
      this.setState(newState);
      return;
    }

    
            
            // Moving from one list to another
            const startTaskIds = Array.from(start.taskIds);
            startTaskIds.splice(source.index, 1);
            const newStart = {
              ...start,
              taskIds: startTaskIds,
            };

            
            

            if ( ( finish.id == 'column-2' || finish.id == 'column-1') && destination.index == 0) {

             
              const finishTaskIds = Array.from(finish.taskIds);
                finishTaskIds.splice(-1, 1);
                finishTaskIds.splice(destination.index, 0, draggableId);

                startTaskIds.splice(source.index, 0, `${draggableId+1}`);
              
              
            
                this.sendData(draggableId);
            
              const newFinish = {
                ...finish,
                taskIds: finishTaskIds,
              };
             
              const newState = {
                ...this.state,
                columns: {
                  ...this.state.columns,
                  [newStart.id]: newStart,
                  [newFinish.id]: newFinish,
                },
              };
            
  
              this.setState(newState);
            } 

  };


  render() {
    return (
      <div> 
     <DragDropContext onDragEnd={this.onDragEnd}  >
        <Container>
          {this.state.columnOrder.map(columnId => {
           
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(
                taskId => this.state.tasks[taskId],
              );
             
               
                  return <Column key={column.id} column={column} tasks={tasks} />;
              
          
             
           
           
          })}
        </Container>
      </DragDropContext>
  
      </div>
       );
  }
}

export default Emotional;
