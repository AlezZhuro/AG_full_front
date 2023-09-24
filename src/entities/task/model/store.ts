import { action, makeObservable } from 'mobx';

import { EntityStore } from '@/shared/entities';
import * as API from '@/shared/api/tasks/tasks';
import { Meta } from '@/shared/api/meta';

import { TaskEntity } from './type';


export class TaskStore extends EntityStore<TaskEntity> {
  constructor(_api = API) {
    super(_api);

    makeObservable(this, {
      fetchList: action,
    });
  }

  async fetchList() {
    try {
      this._meta = Meta.LOADING;

      const { data } = await this.api.getTasks();
      console.log({ data });
      this.setList(data);
      setTimeout(() => this._meta = Meta.SUCCESS , 500);
    } catch (error) {
      this._meta = Meta.ERROR;
      this.errorHandler(error?.message)
    }
  }
}

export const taskStore = new TaskStore();
