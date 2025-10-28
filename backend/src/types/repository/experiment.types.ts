export enum ExperimentStatus {
  CREATED = 'created',
  RUNNING = 'running',
  PAUSED = 'paused',
  COMPLETED = 'completed'
}

export type Experiments = {
  _id?: String;
  name: string;
  description: string | null;
  status: ExperimentStatus;
  start_date: null | Date;
  end_date: null | Date;
  goal: string;
  created_at?: Date;
  updated_at?: Date;
}