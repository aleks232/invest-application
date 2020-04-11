export interface IDocuments {
  id?: number;
  title?: string;
  description?: string;
  type?: string;
  packageId?: number;
}

export const defaultValue: Readonly<IDocuments> = {};
