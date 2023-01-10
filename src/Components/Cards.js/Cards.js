import "./Cards.css";
import { Box, Flex, VStack, Container, Tag, TagLabel } from "@chakra-ui/react";
import data from "../Data/data.json";
import { useState } from "react";

export default function Cards() {
  // const [new, setNew] = useState();

  return (
    <>
      <VStack>
        <Container
          maxW="100%"
          bg="hsl(180, 52%, 96%)"
          color="#262626"
          pt={"5rem"}
        >
          <Flex align="center" direction="column" justify="center">
            {data?.map(
              ({
                id,
                company,
                logo,
                newJob,
                featured,
                position,
                role,
                level,
                postedAt,
                contract,
                location,
                languages,
                tools,
                index,
              }) => {
                return (
                  <Box
                    bg="white"
                    w="80%"
                    p={4}
                    m={4}
                    color="white"
                    boxShadow="lg"
                    borderRadius="lg"
                    key={index}
                  >
                    <div className="jobs_titles">
                      <div className="job_titles_container">
                        <img src={logo} alt="" />
                        <div className="card_content">
                          <div className="card_content_company">
                            <h4> {company}</h4>
                            <div
                              className="company_tag"
                              style={{
                                display: newJob ? "block" : "none",
                              }}
                            >
                              <h6 className="tagLabel_new_job">
                                {newJob === true ? "new!" : ""}
                              </h6>
                            </div>
                            <div
                              className="company_tag"
                              style={{
                                display: featured ? "block" : "none",
                              }}
                            >
                              <h6 className="tagLabel_featured">
                                {featured === true ? "featured" : ""}
                              </h6>
                            </div>
                          </div>

                          <h3> {position}</h3>
                          <div className="job_information">
                            <p>{postedAt}</p>
                            <hr className="bullet" />
                            <p> {contract}</p>
                            <hr className="bullet" />
                            <p>{location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="tags">
                        <button href="/">
                          <Tag className="tags_parent">
                            <TagLabel className="tagLabel">{role}</TagLabel>
                          </Tag>
                        </button>
                        <button href="/">
                          <Tag className="tags_parent">
                            <TagLabel className="tagLabel">{level}</TagLabel>
                          </Tag>
                        </button>

                        {languages.map((languages, index) => {
                          return (
                            <>
                              <button href="/" key={index}>
                                <Tag className="tags_parent">
                                  <TagLabel className="tagLabel">
                                    {languages.language}
                                  </TagLabel>
                                </Tag>
                              </button>
                            </>
                          );
                        })}
                        {tools.map((tools, index) => {
                          return (
                            <>
                              <button
                                href="/"
                                style={{
                                  display: tools.tool ? "block" : "none",
                                }}
                                key={index}
                              >
                                <Tag className="tags_parent">
                                  <TagLabel className="tagLabel">
                                    {tools.tool}
                                  </TagLabel>
                                </Tag>
                              </button>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </Box>
                );
              }
            )}
          </Flex>
        </Container>
      </VStack>
    </>
  );
}
