import styled from "styled-components";

export const Container = styled.nav`
  margin-top: 45px;

  ol {
    counter-reset: item;
    padding-left: 16px;
  }

  li {
    list-style: none;
    margin-top: 2px;

    span {
      cursor: pointer;

      svg {
        margin-left: 4px;
      }
    }

    &.has-branch {
      position: relative;
    }

    > ol {
      display: none;
      transition: display 0.6s;
    }

    &.open {
      > ol {
        display: block;
      }
    }

    &::before {
      font-weight: bolder;
      display: inline;
      content: counters(item, ".") " ";
      counter-increment: item;
    }
  }
`;
