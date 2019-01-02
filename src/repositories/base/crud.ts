import {IBuildOptions, IFindOptions, Model}                       from 'sequelize-typescript';
import {FindOptions, InstanceDestroyOptions, InstanceSaveOptions} from 'sequelize';
import {FilteredModelAttributes}                                  from 'sequelize-typescript/lib/models/Model';

export class CrudRepository<T extends Model<T>> {
  constructor(private _instance: new (values?: FilteredModelAttributes<T>, options?: IBuildOptions) => T,
              private _createOptions: InstanceSaveOptions = {validate: true, returning: true},
              private _deleteOptions: InstanceDestroyOptions = {force: true},
              private _readOptions?: IFindOptions<T>) {}

  get CreateOptions(): InstanceSaveOptions {
    return this._createOptions;
  }
  set CreateOptions(value: InstanceSaveOptions) {
    this._createOptions = value;
  }

  get DeleteOptions(): InstanceDestroyOptions {
    return this._deleteOptions;
  }
  set DeleteOptions(value: InstanceDestroyOptions) {
    this._deleteOptions = value;
  }

  get ReadOptions(): IFindOptions<T> {
    return this._readOptions;
  }
  set ReadOptions(value: IFindOptions<T>) {
    this._readOptions = value;
  }

  async readById<K>(id: K): Promise<T> {
    const exists = await this._instance['findByPk'](id, this._readOptions);
    if (!exists) {
      throw new Error(`no Entry found with id ${id}`);
    }
    return exists;
  }

  async readAll(options: FindOptions<T>): Promise<T[]> {
    return await this._instance['findAll'](options);
  }

  async create(data: any, options?: IBuildOptions): Promise<T> {
    return await this._instance['build'](data, options).save(this._createOptions);
  }

  async update<K>(id: K, updateSet: any): Promise<T> {
    return await (await this.readById(id)).update(updateSet);
  }

  async delete<K>(id: K) {
    await (await this.readById(id)).destroy(this._deleteOptions);
  }
}
