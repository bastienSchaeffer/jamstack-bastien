import styled from 'styled-components';
import {
  borderRadius,
  buttonStyle,
  space,
  fontSize,
  variant,
} from 'styled-system';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

const Button = styled('button')(
  {
    appearance: 'button',
    border: 0,
    outline: 0,
    boxShadow: '0 3px 10px rgba(0,0,0,.16)',
    transition: 'all 0.2s ease',
  },
  borderRadius,
  buttonStyle,
  buttonSize,
  space,
  fontSize
);

Button.defaultProps = {
  borderRadius: 2,
};

Button.displayName = `Button`;

export default Button;
