import github from './github.js';
import query from '../queries/user.js';

export default async function getUserStats() {
    return await github(await query);
}
