const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: ':deep learning ' },
      'task-2': { id: 'task-2', content: ':robots' },
      'task-3': { id: 'task-3', content: ':IA in society' },
      'task-4': { id: 'task-4', content: ':hatsune miku'  },
      'task-11': { id: 'task-5', content: ':deep learning ' },
      'task-21': { id: 'task-6', content: ':robots' },
      'task-31': { id: 'task-7', content: ':IA in society' },
      'task-41': { id: 'task-8', content: ':hatsune miku'  },
      'task-51': { id: 'task-9', content: ':deep learning ' },
      'task-61': { id: 'task-10', content: ':robots' },
      'task-71': { id: 'task-11', content: ':IA in society' },
      'task-81': { id: 'task-12', content: ':hatsune miku'  },

    },
    columns: {
      'column-7': {
        id: 'column-7',
        title: 'Artificial',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-8': {
        id: 'column-8',
        title: '',
        taskIds: [],
      },
      
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-7', 'column-8'],
  };
  
  export default initialData;
  