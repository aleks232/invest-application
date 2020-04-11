import { Moment } from 'moment';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IAccounts {
  id?: number;
  login?: string;
  isDeleted?: number;
  password?: string;
  expiredDate?: Moment;
  employees?: IEmployee[];
}

export const defaultValue: Readonly<IAccounts> = {};
