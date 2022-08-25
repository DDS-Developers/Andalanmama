/**
 * scenes/Explore/FilterCategory/InputTags/Wrapper.js
 *
 */
import styled from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)`
  margin-bottom: 30px;
  height: 42px;
  line-height: 42px;
  border-radius: 50px;
  padding-left: 15px;
  padding-right: 52px;
  background-color: #efefef;
  position: relative;

  .input-field {
    width: 100%;
    height: 42px;
    line-height: 42px;
  }

  .input-submit {
    position: absolute;
    width: 42px;
    height: 42px;
    text-align: center;
    top: 0;
    right: 0;
    color: #767676;
  }
`;

export default Wrapper;
