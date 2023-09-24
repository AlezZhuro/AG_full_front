import { action, makeObservable } from 'mobx';

import { EntityStore } from '@/shared/entities';
import * as API from '@/shared/api/tasks/tasks';
import { Meta } from '@/shared/api/meta';

import { TaskEntity } from './type';
import { TaskEntityResponse, TaskListResponse } from '@/shared/api/models';

export class TaskStore extends EntityStore<TaskEntity> {
  constructor(_api = API) {
    super(_api);

    makeObservable(this, {
      fetchList: action,
      loadOneTask: action,
    });
  }

  async fetchList() {
    try {
      this._meta = Meta.LOADING;

      const { data } = await this.api.getTasks();
      const { success, ...item } = data as TaskListResponse;
      if (success) {
        this.setList(item);
        setTimeout(() => (this._meta = Meta.SUCCESS), 500);
      }
    } catch (error) {
      this._meta = Meta.ERROR;
      this.errorHandler(error?.message);
    }
  }

  async loadOneTask(id: number) {
    try {
      const { data } = await this.api.fetchTask(id);

      const {success, entity} = data as TaskEntityResponse;
      if (success) {
        this._openedItem = entity;
      }
    } catch (error) {
      this.errorHandler(error?.message);
    }
  }
}

export const taskStore = new TaskStore();
