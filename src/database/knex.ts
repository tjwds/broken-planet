import knexFile from '../../knexfile';
import * as Knex from 'knex';

const environment: string = process.env.ENVIRONMENT || 'development'
if (!knexFile[environment]) {
    throw new Error("No environment for type found.");
}
const config: Knex = knexFile[environment];
const knexHandle: any = Knex(config);
export default knexHandle;
