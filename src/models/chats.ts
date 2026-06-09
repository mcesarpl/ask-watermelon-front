export interface Chat {
  id: string;
  userId: string;
  title: string;
  content: string;
  slug?: string;
  createdAt?: Date;
  updatedAt?: Date;
}