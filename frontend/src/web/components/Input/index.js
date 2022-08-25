import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  text-decoration: none;
  outline: none;
  font-size: 14px;
  transition: all 0.6s;
  vertical-align: middle;
  height: ${props => props.height || '48px'};
  line-height: ${props => props.lineHeight || '48px'};
  width: ${props => props.width || '360px'};
  color: ${props => props.color || '#333333'};
  background-color: ${props => props.bgColor || '#ffffff'};
  margin: ${props => props.margin};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding-left: ${props => props.paddingLeft || '20px'};
  padding-right: ${props => props.paddingRight || '20px'};
  margin-right: ${props => props.marginRight};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '5px'};
  box-shadow: ${props => props.boxShadow};
`;

export default Input;
