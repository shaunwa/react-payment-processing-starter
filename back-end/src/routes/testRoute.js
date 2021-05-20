import { getDbConnection } from '../db';

export const testRoute = {
    path: '/test',
    method: 'get',
    handler: (req, res) => {
        res.send('It works!');
    },
}