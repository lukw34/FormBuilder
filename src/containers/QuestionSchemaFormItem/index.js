import {connect} from 'react-redux';

import {changeItemQuestion, changeItemType, addItem, changeCondition, deleteItem} from '../../actions/schema.actions';
import QuestionSchemaFormItem from '../../components/QuestionSchemaFormItem';
import {selectItemValue, selectCondition} from '../../selectors/schema.selectors';


const mapDispatchToProps = ({
    changeItemQuestion,
    changeItemType,
    changeCondition,
    deleteInput: deleteItem,
    addInput: addItem
});

const mapStateToProps = (state, props) => ({
    ...selectItemValue(state, props),
    condition: selectCondition(state, props)
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSchemaFormItem);