export interface IAuth {
  id: number | null;
  name: string  | null;
  email:string  | null;
}
export type authAction = {
  type: string
  payload: IAuth
}