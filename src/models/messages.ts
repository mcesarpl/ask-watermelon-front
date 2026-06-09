export interface Message {
  id?: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  modelId?: string;
  chatId: string;
}