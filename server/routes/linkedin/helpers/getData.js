import _ from 'lodash';

// @FIXME
// Use mock data because the LinkedIn API is super locked down.
// Hoping that in the future, this logic will be plug in and play
// once the API becomes more inclusive.
import data from './data.json';

const simplifyPositions = positions =>
    _.map(positions, position => {
        return {
            title: _.get(position, 'title'),
            summary: _.get(position, 'summary'),
            startDate: _.get(position, 'start-date'),
            endDate: _.get(position, 'end-date'),
            isCurrent: _.get(position, 'is-current'),
            company: _.get(position, 'company')
        };
    });

export default function getData() {
    const currentPositions = _.get(data, 'three-current-positions', []);
    const pastPositions = _.get(data, 'three-past-positions', []);

    return {
        currentPositions: simplifyPositions(currentPositions),
        pastPositions: simplifyPositions(pastPositions)
    };
}
