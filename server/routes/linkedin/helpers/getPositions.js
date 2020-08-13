import _ from 'lodash';

// @FIXME
// Use mock data because the LinkedIn API is super locked down.
// Hoping that in the future, this logic will be plug in and play
// once the API becomes more inclusive.
import data from './data.js';

const simplifyPositions = positions =>
    _.map(positions, position => {
        return {
            title: _.get(position, 'title'),
            summary: _.get(position, 'summary'),
            startDate: _.get(position, 'start-date'),
            endDate: _.get(position, 'end-date'),
            isCurrent: _.get(position, 'is-current'),
            company: _.get(position, 'company'),
            companyUrl: _.get(position, 'company-url')
        };
    });

export default function getPositions() {
    const currentPositions = _.get(data, 'three-current-positions', []);
    const pastPositions = _.get(data, 'three-past-positions', []);

    return [...simplifyPositions(currentPositions), ...simplifyPositions(pastPositions)];
}
