export type Variants = {
  name: string;
  description: string | null;
  is_control: boolean;
  config: Record<string, any> | null;
  experiment_id: string;
  weight: string;
}