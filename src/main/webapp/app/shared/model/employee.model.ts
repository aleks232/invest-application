import { Moment } from 'moment';
import { ILots } from 'app/shared/model/lots.model';
import { Role } from 'app/shared/model/enumerations/role.model';

export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Moment;
  role?: Role;
  lots?: ILots[];
  accountId?: number;
}

export const defaultValue: Readonly<IEmployee> = {};
