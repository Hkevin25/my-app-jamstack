export type Id = number;

export interface Entity {
  id: Id;
}

export interface Todo extends Entity {
  text: string;
  done: boolean;
}
