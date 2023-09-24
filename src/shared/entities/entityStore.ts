import { computed, makeObservable, observable } from 'mobx';

import { Meta } from '@/shared/api/meta';
import { showToast } from '@/shared/ui/toast';

export interface StoreList<T> {
  count?: number;
  items: T[];
}

export abstract class EntityStore<T> {
  public _meta: Meta = Meta.INITIAL;
  public _list: StoreList<T> = {
    count: 0,
    items: [],
  };
  public _openedItem: null | T = null;

  constructor(public _api: unknown | null = null) {
    makeObservable(this, {
      _meta: observable,
      _list: observable,
      _openedItem: observable,
      meta: computed,
      list: computed,
    });
  }

  get meta() {
    return this._meta;
  }

  get list() {
    return this._list;
  }

  get openedItem() {
    return this._openedItem;
  }

  get api() {
    return this._api;
  }

  setList(list: StoreList<T>) {
    this._list = list;
  }

  set setOpenedItem(item: T) {
    this._openedItem = item;
  }

  errorHandler(message: string) {
    let toastMsg: string = '';
    if (!message.length) {
      toastMsg = 'Something wrong...';
    }
    toastMsg = message;

    showToast({title: toastMsg, status: 'error'})
  }

  addOne(item: T) {
    const store = this._list;
    store.count += 1;
    store.items.unshift(item);
    this._list = store;
  }

  clearOpenedItem() {
    this._openedItem = null
  }
}
