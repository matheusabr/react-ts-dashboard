const AlertTypes = {
  RESET_ALERT: "RESET_ALERT",
  SET_ALERT: "SET_ALERT",
};

export enum AlertType {
  WARNING,
  SUCCESS,
}

export interface Alert {
  show: boolean;
  type: AlertType | null;
  message: string;
}

export default AlertTypes;
