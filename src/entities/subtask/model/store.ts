import { action, makeObservable } from 'mobx';

import { EntityStore } from '@/shared/entities';
import * as API from '@/shared/api/subtasks/subtasks';

import { SubtaskEntity } from './type';
import { TaskEntityResponse } from '@/shared/api/models';

export class SubtaskStore extends EntityStore<SubtaskEntity> {
  constructor(_api = API) {
    super(_api);

    makeObservable(this, {
      loadOneSubtask: action,
    });
  }

  async loadOneSubtask(id: number) {
    try {
      const { data } = await this.api.fetchSubtask(id);

      const {success, entity} = data as TaskEntityResponse;
      if (success) {
        this._openedItem = entity;
      }
    } catch (error) {
      this.errorHandler(error?.message);
    }
  }
}

export const subtaskStore = new SubtaskStore();
