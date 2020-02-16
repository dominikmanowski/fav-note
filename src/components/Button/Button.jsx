import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ secondary }) => (!secondary ? '#ffd82b' : '#e6e6e6')};
  width: ${({ secondary }) => (!secondary ? '220px' : '105px')};
  height: ${({ secondary }) => (!secondary ? '47px' : '30px')};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: ${({ secondary }) => (!secondary ? '16px' : '10px')};
  text-transform: uppercase;
`;

export default Button;
