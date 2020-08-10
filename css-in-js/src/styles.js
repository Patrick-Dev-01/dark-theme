import styled from 'styled-components'; // /native no RN

export const Title = styled.h1`
    color: #f00;
    font-size: ${props => `${props.fontSize}px`};

    span {
        font-size: 12px;
    }
`;

// herdar as propriedades do TITLE acima
export const TitleSmall = styled(Title)`
   color: #00f;
   font-size: 16px;
`;

