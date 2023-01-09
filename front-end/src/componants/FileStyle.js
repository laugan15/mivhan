import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  width : 100%;
  height : 100%;
  justify-content : center;
`;

export const CardTitle = styled.h1`
display:flex;
align-item:center;
justify-content:center;
`;

export const CardImg = styled.img`
width : 15vw;
height : 15vh;
display:flex;
align-items: center;
justify-content : center;
@media (max-width: 800px) {
    width : 5vw;
    height : 5vh;
    
}
`;
