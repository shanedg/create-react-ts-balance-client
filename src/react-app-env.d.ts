/// <reference types="react-scripts" />

/**
 * Column options.
 */
interface IColumn {
  name: string;
  readOnly?: boolean;
}

/**
 * Transaction.
 */
interface ITransaction {
  amount: number;
  due: string;
  effective: string;
  name: string;
  scheduled: string;

  /**
   * [TODO]: might want to handle these as more than strings, lessons learned from balance-client
   */
  fromAccount: any;
  toAccount: any;
  bucket: any;

  /**
   * CMS properties.
   */
  id?: number;
  created_at?: string;
  updated_at?: string;

  /**
   * Index signature.
   */
  [index: string]: any;
}