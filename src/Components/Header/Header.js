import { Container, VStack } from "@chakra-ui/react";
import "./Header.css";
import BackgroundImage from "./../images/bg-header-desktop.svg";

export default function Card() {
  return (
    <>
      <VStack>
        <Container maxW="100%"  color="#262626" p={0}>
          <header className="header_container">
              <img src={BackgroundImage} alt="header_img" />
          </header>
        </Container>
      </VStack>
    </>
  );
}
