import styled from "styled-components";

const ToDoCardStyled = styled.article`
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  .todo-card__name {
    margin: 0;
    flex: 1;
    font-size: 1.3rem;
  }

  .button {
    border: 1px solid #ccbdbd;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 5px 15px;
  }
`;

export default ToDoCardStyled;
