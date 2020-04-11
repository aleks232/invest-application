import { Moment } from 'moment';
import { IOrders } from 'app/shared/model/orders.model';
import { IPackages } from 'app/shared/model/packages.model';

export interface ILots {
  id?: number;
  description?: string;
  minPrice?: number;
  startDate?: Moment;
  endDate?: Moment;
  orders?: IOrders[];
  packages?: IPackages[];
  employeeId?: number;
}

export const defaultValue: Readonly<ILots> = {};
