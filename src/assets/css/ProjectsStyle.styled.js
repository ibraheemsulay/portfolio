import styled from "styled-components";
import { HeroStyle } from "./Hero.styled";

export const ProjectsStyle = styled(HeroStyle)`
  position: relative;
  width: 100%;
  margin-top: 200px;

  @media (min-width: 768px) {
    margin-top: 200px;
  }

  @media (min-width: 1240px) {
    margin-top: 150px;
  }

  section {
    z-index: 1;
    padding: 0 15px 0;
    margin-top: 0;

    @media (min-width: 768px) {
      padding-top: 50px;
      ${"" /* flex-direction: row-reverse; */}
    }
  }

  div {
    z-index: 1;
    h3 {
      text-align: center;
      margin: auto;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 5px;
        background: green;
      }
    }
  }
  div.title {
    padding: 0;
    display: flex;
    align-self: start;
    flex-direction: column;
    margin-top: 0;

    @media (min-width: 768px) {
      padding: 0 15px;
    }
    @media (min-width: 1024px) {
      margin-top: 0;
      padding: 0 150px 0 50px;
      ${"" /* padding: 0 50px 0 150px; */}
    }

    h4 {
      align-self: start;
      letter-spacing: 0;
      margin-top: 20px;

      @media (min-width: 768px) {
        margin-top: 0;
      }
    }

    p {
      font-weight: 400;
      margin-top: 20px;
      width: 100%;
      span {
        font-weight: bolder;
      }

      a {
        text-decoration: none;
        color: hsla(233, 97%, 27%, 0.692);
      }
    }

    button {
      margin-top: 20px;
    }
  }
`;
