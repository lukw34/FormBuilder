import styled from 'styled-components';

export default styled.div`
    background: grey;
    margin: 10px 5px;
    width: 40vw;
    transform: translateX(${props => (props.intend) * 5}vw);
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
`;
