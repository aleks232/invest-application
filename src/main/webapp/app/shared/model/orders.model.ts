import { Moment } from 'moment';

export interface IOrders {
  id?: number;
  startDate?: Moment;
  endDate?: Moment;
  price?: number;
  lotId?: number;
}

export const defaultValue: Readonly<IOrders> = {};
