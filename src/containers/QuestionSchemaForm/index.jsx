import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addItem as addFormItem} from '../../actions/schema.actions';
import {selectRootSchemaKeys} from '../../selectors/schema.selectors';
import QuestionSchemaFormComponent from '../../components/QuestionSchemaForm';

const mapDispatchToProps = ({
    addItem: addFormItem
});

const mapStateToProps = state => ({
    schemaKeys: selectRootSchemaKeys(state)
});

class QuestionSchemaForm extends React.Component {
    static propTypes = {
        addItem: PropTypes.func.isRequired,
        schemaKeys: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    };

    addInput = () => {
        const {addItem, schemaKeys} = this.props;
        addItem(schemaKeys.length.toString(), '');
    };

    render() {
        return (<QuestionSchemaFormComponent schemaKeys={this.props.schemaKeys} addInput={this.addInput} />);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionSchemaForm);

