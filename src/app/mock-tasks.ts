import {TaskDto} from './dto/TaskDto';

export const TASKS: TaskDto[] = [
  // tslint:disable-next-line:max-line-length
  {id: 1, title: 'Task 1', description: 'Long description of Task 1', isDone: true, borderDate: new Date(2016, 1, 1, 0, 59, 2) },
  {id: 2, title: 'Task 2', description: 'Long description of Task 2', isDone: false, borderDate: new Date(2012, 2, 11, 1, 18, 2)},
  {id: 3, title: 'Task 3', description: 'Long description of Task 3', isDone: true, borderDate: new Date(2013, 3, 7, 3, 17, 2)},
  {id: 4, title: 'Task 4', description: 'Long description of Task 4', isDone: true, borderDate: new Date(2014, 4, 3, 5, 22, 2)},
  {id: 5, title: 'Task 5', description: 'Long description of Task 5', isDone: false, borderDate: new Date(2015, 5, 6, 7, 11, 2)},
  {id: 6, title: 'Task 6', description: 'Long description of Task 6', isDone: false, borderDate: new Date(2018, 6, 21, 9, 15, 2)},
  {id: 7, title: 'Task 7', description: 'Long description of Task 7', isDone: false, borderDate: new Date(2020, 7, 18, 11, 1, 2)},
  {id: 8, title: 'Task 8', description: 'Long description of Task 8', isDone: true, borderDate: new Date(2045, 8, 2, 13, 7, 2)},
  {id: 9, title: 'Task 9', description: 'Long description of Task 9', isDone: false, borderDate: new Date(2018, 9, 9, 15, 12, 2)},
  {id: 10, title: 'Task 10', description: 'Long description of Task 10', isDone: false, borderDate: new Date(2018, 10, 15, 17, 31, 2)}
];
