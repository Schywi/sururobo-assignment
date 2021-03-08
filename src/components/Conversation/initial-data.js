const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: ':hi ' },
      'task-2': { id: 'task-2', content: ':how are you?' },
      'task-3': { id: 'task-3', content: ':you are human?' },
      'task-4': { id: 'task-4', content: ':do you like IA?'  },
      'task-11': { id: 'task-5', content: ':hi ' },
      'task-21': { id: 'task-6', content: ':how are you?' },
      'task-31': { id: 'task-7', content: ':you are human?' },
      'task-41': { id: 'task-8', content: ':do you like IA?'  },
      'task-111': { id: 'task-9', content: ':hi ' },
      'task-211': { id: 'task-10', content: ':how are you?' },
      'task-311': { id: 'task-11', content: ':you are human?' },
      'task-411': { id: 'task-12', content: ':do you like IA?'  },

    },
    columns: {
      'column-5': {
        id: 'column-5',
        title: 'Conversation',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-6': {
        id: 'column-6',
        title: '',
        taskIds: [],
      },
      
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-5', 'column-6'],
  };
  
  export default initialData;
  