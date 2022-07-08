import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "./data";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  /* gap: 10px; */
  background: #fff;
  padding: 0 50px;
  /* grid-row-gap: 5px; */
  /* margin: 50px; */
  /* justify-content: space-between; */
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;