import "./Cards.css";
import { Box, Flex, VStack, Container, Tag, TagLabel } from "@chakra-ui/react";
import Logo from "./../images/eyecam-co.svg";
// import {useState, useEffect} from "react";

export default function Cards() {
  return (
    <>
      <VStack>
        <Container maxW="100%" bg="hsl(180, 52%, 96%)" color="#262626" p={0}>
          <Flex align="center" direction="column" justify="center">
            <Box
              bg="white"
              w="80%"
              p={4}
              m={20}
              color="white"
              boxShadow="lg"
              borderRadius="lg"
            >
              <div className="jobs_titles">
                <img src={Logo} alt="" />
                <div className="card_content">
                  <h4> Eyecam Co.</h4>
                  <h3> Full Stack Engineer</h3>
                  <div className="job_information">
                    <p>3w ago</p>
                    <hr className="bullet" />
                    <p> Full Time</p>
                    <hr className="bullet" />
                    <p>Worldwide</p>
                  </div>
                </div>
                <hr className="divider" />
                <div className="tags">
                  <a href="/">
                    <Tag p={2.5} bg="hsl(180, 52%, 96%)" className="tags_parent">
                      <TagLabel color="hsl(180, 29%, 50%)" className="tagLabel">
                        Fullstack
                      </TagLabel>
                    </Tag>
                  </a>
                  <a href="/">
                    <Tag p={2.5} bg="hsl(180, 52%, 96%)" className="tags_parent">
                      <TagLabel color="hsl(180, 29%, 50%)" className="tagLabel">
                        Midweight
                      </TagLabel>
                    </Tag>
                  </a>
                  <a href="/">
                    <Tag p={2.5} bg="hsl(180, 52%, 96%)" className="tags_parent">
                      <TagLabel color="hsl(180, 29%, 50%)" className="tagLabel">
                        JavaScript
                      </TagLabel>
                    </Tag>
                  </a>
                  <a href="/">
                    <Tag p={2.5} bg="hsl(180, 52%, 96%)" className="tags_parent">
                      <TagLabel color="hsl(180, 29%, 50%)" className="tagLabel">
                        Python{" "}
                      </TagLabel>
                    </Tag>
                  </a>
                  <a href="/">
                    <Tag p={2.5} bg="hsl(180, 52%, 96%)" className="tags_parent">
                      <TagLabel color="hsl(180, 29%, 50%)" className="tagLabel">
                        Django
                      </TagLabel>
                    </Tag>
                  </a>
                </div>
              </div>
            </Box>
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
