import Text from './TextInput/index';
import Select from './SelectInput/index';
import InputHoc from './InputHOC';

const TextInput = InputHoc(Text);
const SelectInput = InputHoc(Select);

export {
    TextInput,
    SelectInput
};