import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <div className="bg-base-100 shadow-xl">
      <Image src={item.img} />
      <Info>
        <Button>Add To Cart</Button>
        <Title>{item.title}</Title>
      </Info>
      <div>
    <h2 className="card-title">
      {item.name}
    </h2>
    <p>{item.subname}</p>
    <h2>{item.price}</h2>
  </div>
      </div>
    </Container>
    
  );
};

export default CategoryItem;