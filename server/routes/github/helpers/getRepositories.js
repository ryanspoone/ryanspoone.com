import github from './github';
import query from '../queries/repos';

export default async function getRepositories() {
    return await github(await query);
}
