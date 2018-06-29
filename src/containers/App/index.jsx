import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setSchema} from '../../actions/schema.actions';

import AppView from '../../components/App';

const mapDispatchToProps = ({
    setSchema
});

class App extends React.Component {
    static propTypes = {
        setSchema: PropTypes.func.isRequired
    };

    componentDidMount() {
        const schema = window.localStorage.getItem('schema');
        if (schema) {
            this.props.setSchema(JSON.parse(schema));
        }
    }

    render() {
        return <AppView />;
    }
}

export default connect(null, mapDispatchToProps)(App);