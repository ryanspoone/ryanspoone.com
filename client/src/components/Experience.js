import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Github extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPosition: 0,
            isMobile: window.matchMedia('(max-width: 37.5em)').matches
        };
    }

    componentDidMount() {
        const handler = e => this.setState({ isMobile: e.isMobile });
        window.matchMedia('(max-width: 37.5em)').addListener(handler);
    }

    getSelectedIndex(index) {
        this.setState({
            selectedPosition: index
        });
    }

    static propTypes = {
        data: PropTypes.any,
        isLoading: PropTypes.bool,
        error: PropTypes.any,
        errorCode: PropTypes.any
    };

    render() {
        const { error, errorCode, data, isLoading } = this.props;
        if (isLoading) {
            return (
                <section id="experience" className="experience">
                    <h3 className="heading">Where I&apos;ve Worked</h3>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </section>
            );
        } else if (data) {
            return (
                <section id="experience" className="experience">
                    <h3 className="heading">Where I&apos;ve Worked</h3>
                    <div className="jobs">
                        <ul role="tablist" aria-label="Job tabs" className="job-tabs">
                            {data.map((position, index) => {
                                const isSelected = this.state.selectedPosition === index;

                                if (isSelected) {
                                    return (
                                        <li key={index}>
                                            <button
                                                id={`tab-${index}`}
                                                role="tab"
                                                aria-selected="true"
                                                aria-controls={`panel-${index}`}
                                                tabIndex="0"
                                                className="job-tab active"
                                                onClick={event => {
                                                    event.preventDefault();
                                                    this.getSelectedIndex(index);
                                                }}
                                            >
                                                <span>{position.company}</span>
                                            </button>
                                        </li>
                                    );
                                }
                                return (
                                    <li key={index}>
                                        <button
                                            id={`tab-${index}`}
                                            role="tab"
                                            aria-selected="false"
                                            aria-controls={`panel-${index}`}
                                            tabIndex="-1"
                                            className="job-tab"
                                            onClick={event => {
                                                event.preventDefault();
                                                this.getSelectedIndex(index);
                                            }}
                                        >
                                            <span>{position.company}</span>
                                        </button>
                                    </li>
                                );
                            }, this)}
                            <span
                                className="job-highlight"
                                style={{
                                    transform: this.state.isMobile
                                        ? `translateX(${180 * this.state.selectedPosition}px)`
                                        : `translateY(${42 * this.state.selectedPosition}px)`
                                }}
                            ></span>
                        </ul>

                        {this.props.data.map((position, index) => {
                            const isSelected = this.state.selectedPosition === index;

                            if (isSelected) {
                                return (
                                    <div
                                        key={index}
                                        id={`panel-${index}`}
                                        role="tabpanel"
                                        aria-labelledby={`tab-${index}`}
                                        tabIndex="0"
                                        className="job-info"
                                    >
                                        <h4 className="job-title">
                                            <span>{position.title}</span>
                                            <span className="job-company">
                                                <span>&nbsp;@&nbsp;</span>
                                                <a
                                                    href={position.companyUrl}
                                                    target="_blank"
                                                    rel="nofollow noopener noreferrer"
                                                >
                                                    {position.company}
                                                </a>
                                            </span>
                                        </h4>
                                        <h5 className="job-timeframe">
                                            <span>
                                                {position.startDate} -{' '}
                                                {position.isCurrent ? 'Present' : position.endDate}
                                            </span>
                                        </h5>
                                        <div
                                            className="job-summary"
                                            dangerouslySetInnerHTML={{ __html: position.summary }}
                                        ></div>
                                    </div>
                                );
                            }
                            return (
                                <div
                                    key={index}
                                    id={`panel-${index}`}
                                    role="tabpanel"
                                    aria-labelledby={`tab-${index}`}
                                    tabIndex="-1"
                                    hidden
                                    className="job-info"
                                >
                                    <h4 className="job-title">
                                        <span>{position.title}</span>
                                        <span className="job-company">
                                            <span>&nbsp;@&nbsp;</span>
                                            <a
                                                href={position.companyUrl}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                            >
                                                {position.company}
                                            </a>
                                        </span>
                                    </h4>
                                    <h5 className="job-timeframe">
                                        <span>
                                            {position.startDate} -{' '}
                                            {position.isCurrent ? 'Present' : position.endDate}
                                        </span>
                                    </h5>
                                    <div
                                        className="job-summary"
                                        dangerouslySetInnerHTML={{ __html: position.summary }}
                                    ></div>
                                </div>
                            );
                        }, this)}
                    </div>
                </section>
            );
        } else {
            return (
                <section id="experience" className="experience">
                    <h3 className="heading">Where I&apos;ve Worked</h3>
                    <div className="section-error">
                        <h2>Oh no! Something went wrong...</h2>
                        <h4>{errorCode}</h4>
                        <code>{error || 'Unknown error occurred.'}</code>
                    </div>
                </section>
            );
        }
    }
}
