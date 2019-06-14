export interface NotificationData {
  title: string;
  actionText: string;
  description: string;
  type: 'success' | 'error';
  delay: number;
  icon: string;
  action: () => void;
}
