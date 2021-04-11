/**
 * @author Paul M
 * Button component
 */
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => {
      if(props.color === 'webColor1') {
        return '#6495ed';
      }else if(props.color === 'webColor2') {
        return '#ff3333';
      }else if(props.color === 'webColor3') {
        return '#00e600';
      }else if(props.color === 'webColor4'){
        return '#ffc61a';
      }else{
        return '#C71585';
      }
    }
  };
  color: #fff;
  font-weight: bold;
  border: 0;
  padding: 6px 8px;
  border-radius: 4px;
  margin-bottom:10px;
  margin-top:10px;
  width: 200px;
`;

export default Button;