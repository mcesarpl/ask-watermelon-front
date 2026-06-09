export interface Document {
  id: string,
  userId: string,
  fileName: string,
  storageKey: string,
  mimeType: string,
  sizeInBytes: number,
  status: string
}