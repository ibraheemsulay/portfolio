import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 100px;
  align-items: center;
  line-height: 1.3;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    align-items: baseline;
  }

  @media (min-width: 1340px) {
    align-items: center;
  }

  div.title {
    flex-basis: 100%;
    order: 2;
    margin-top: 50px;

    @media (min-width: 768px) {
      flex-basis: 50%;
      padding-right: 20px;
      order: 0;
    }
    @media (min-width: 1340px) {
      align-items: center;
      margin-top: 0;
    }
  }

  p {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.868);
  }
`;
