import _ from 'lodash';

const prettifyTitle = title => {
    if (_.includes(title, '-')) {
        return _.startCase(title);
    }
    return title;
};

export { prettifyTitle };
