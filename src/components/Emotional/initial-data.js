const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: ':angry ' },
      'task-2': { id: 'task-2', content: ':happy' },
      'task-3': { id: 'task-3', content: ':sad' },
      'task-4': { id: 'task-4', content: ':scared' },
      'task-11': { id: 'task-5', content: ':angry ' },
      'task-21': { id: 'task-6',content: ':happy' },
      'task-31': { id: 'task-7', content: ':sad' },
      'task-41': { id: 'task-8', content: ':scared' },
      'task-111': { id: 'task-9', content: ':angry ' },
      'task-211': { id: 'task-10',content: ':happy' },
      'task-311': { id: 'task-11', content: ':sad' },
      'task-411': { id: 'task-12', content: ':scared' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Emotional',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'column-2': {
        id: 'column-2',
        title: '',
        taskIds: [],
      },
      
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2'],
  };
  
  export default initialData;
  