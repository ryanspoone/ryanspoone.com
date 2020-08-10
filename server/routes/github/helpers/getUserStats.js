import github from './github';
import query from '../queries/user';

export default async function getUserStats() {
    return await github(await query);
}
