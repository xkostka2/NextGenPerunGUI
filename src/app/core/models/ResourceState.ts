import {Resource} from './Resource';
import {Task} from './Task';

export interface ResourceState {
  resource: Resource;
  taskList: Task[];
}
