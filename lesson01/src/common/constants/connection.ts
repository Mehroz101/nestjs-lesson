export const connection: Connection = {
  CONNECTION_STRING: 'connection_string',
  DB: 'SQL',
  DBNAME: 'ecommerce',
};
export interface Connection {
  CONNECTION_STRING: string;
  DB: string;
  DBNAME: string;
}
