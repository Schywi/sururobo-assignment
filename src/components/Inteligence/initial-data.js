const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: ':math ' },
      'task-2': { id: 'task-2', content: ':chemistry' },
      'task-3': { id: 'task-3', content: ':python' },
      'task-4': { id: 'task-4', content: ':english' },
      'task-11': { id: 'task-5', content: ':math ' },
      'task-21': { id: 'task-6', content: ':chemistry' },
      'task-31': { id: 'task-7', content: ':python' },
      'task-41': { id: 'task-8', content: ':english' },
      'task-111': { id: 'task-9', content: ':math ' },
      'task-211': { id: 'task-10', content: ':chemistry' },
      'task-311': { id: 'task-11', content: ':python' },
      'task-411': { id: 'task-12', content: ':english' },

    },
    columns: {
      'column-3': {
        id: 'column-3',
        title: 'Inteligence',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-4': {
        id: 'column-4',
        title: '',
        taskIds: [],
      },
      
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-3', 'column-4'],
  };
  
  export default initialData;
  