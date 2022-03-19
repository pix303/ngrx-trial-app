export interface Project {
  id: number;
  title?: string;
  description?: string;
  percentageComplete?: number;
  customerId?: string;
  approved?: boolean;
  status?: 'new' | 'in-progress' | 'closed'
}
