export interface IgetToken {
  access_token: string;
  expires_in: number;
  scope: Array<string>;
  token_type: string;
}

export type startCommercialParameters = {
  /**
   * ID of the channel requesting a commercial | Minimum: 1 Maximum: 1
   */
  broadcaster_id: string;
  /**
   * Desired length of the commercial in seconds | Valid options are 30, 60, 90, 120, 150, 180.
   */
  lenght: number;
};

type startCommercialData = {
  /**
   * Length of the triggered commercial
   */
  length: number;
  /**
   * Length of the triggered commercial
   */
  message: string;
  /**
   * Length of the triggered commercial
   */
  retry_after: number;
};

export type JSONstartCommercial = {
  data: Array<startCommercialData>;
};
