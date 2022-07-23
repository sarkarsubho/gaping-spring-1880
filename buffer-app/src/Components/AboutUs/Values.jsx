import React, { Component } from "react";
import styles from "./Values.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Values = () => {
  return (
    <>
      <section>
        <div className={styles.val}>
          <h2>Our values</h2>
          <p>
            We want to build a different type of company that’s focused not only
            on the bottom line, but also the happiness of our customers and
            team, and our personal growth along the journey. Here are the values
            that collectively guide our decisions and actions:
          </p>
        </div>
        <div className={styles.val}>
          <Accordion allowToggle>
            <AccordionItem className={styles.acc}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.bx}>
                    1  Default to transparency
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>
                  As individuals, we view transparency as a lifestyle of
                  authenticity and honesty.
                </li>
                <li>
                  As a team, we view transparency as an effective way to work
                  remotely and establish a culture of trust.
                </li>
                <li>
                  s a company, we view transparency as a tool to help others.
                </li>
                <li>
                  A We share early in the decision process to avoid “big
                  revelations.”
                </li>
                <li>
                  We strive to make all communication clear and avoid making
                  assumptions.
                </li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className={styles.acc}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.bx}>
                    2  Cultivate positivity
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>
                  We strive to approach things in a positive way while realizing
                  all emotions are valid.
                </li>
                <li>
                  We avoid non-constructive criticism of team members or
                  customers.
                </li>
                <li>
                  We assume the best of others because we may lack full context.
                </li>
                <li>
                  We believe that constructive, honest feedback is an
                  opportunity for growth.
                </li>
                <li>
                  We push through any artificial harmony to work towards a
                  better environment, product or concept.
                </li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className={styles.acc}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.bx}>
                    3  Show gratitude
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>
                  We regularly stop and demonstrate gratitude for our
                  circumstances.
                </li>
                <li>
                  We are thankful for our customers and approach customer
                  conversations with the knowledge that it’s a privilege to
                  serve them.
                </li>
                <li>
                  We practice humility, operate as no-ego doers and do not
                  attach our personal selves to ideas.
                </li>
                <li>
                  We are grateful for the work teammates do to push the company
                  forward.
                </li>
                <li>
                  We display gratitude for the platforms, tools and open source
                  code and communities that make our company possible and view
                  it as our duty to give back.
                </li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className={styles.acc}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" className={styles.bx}>
                    4  Practice reflection
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>
                  We believe the act of introspection is where true learning and
                  life-changing adjustments originate..
                </li>
                <li>
                  We approach discussions intentionally and think through all
                  angles.
                </li>
                <li>
                  We listen first and then listen more: seeking first to
                  understand, then to be understood.
                </li>
                <li>
                  We are grateful for the work teammates do to push the company
                  forward.
                </li>
                <li>
                  We take the approach that everything is a hypothesis and we
                  could be wrong.
                </li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className={styles.acc}>
              <h2>
                <AccordionButton className={styles.bx}>
                  <Box flex="1" textAlign="left" className={styles.bx}>
                    5  Improve consistently
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>
                  We are biased toward action and have a higher expectation of
                  ourselves and of our product than others have of us.
                </li>
                <li>
                  We aim to be fully engaged in our work and activities, and
                  fully disconnected when we’re not working.
                </li>
                <li>
                  We choose to be where we are the happiest and most productive.
                </li>
                <li>
                  We desire to be better tomorrow than today, knowing that
                  improvement can be found in small changes.
                </li>
                <li>
                  We strive to exemplify a growth mindset and believe that any
                  skill or talent can be learned through deliberate practice.
                </li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className={styles.acc}>
              <h2>
                <AccordionButton className={styles.bx}>
                  <Box flex="1" textAlign="left" className={styles.bx}>
                    6  Act beyond yourself
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <li>
                  We consider the bigger picture, knowing our work goes beyond
                  ourselves.
                </li>
                <li>
                  We are not afraid of the less-traveled path if it holds true
                  to our values and betters the world.
                </li>
                <li>
                  We seek balance by taking into account multiple perspectives
                  and listening deeply.
                </li>
                <li>
                  We desire to be better tomorrow than today, knowing that
                  improvement can be found in small changes.
                </li>
                <li>
                  We work to create an inclusive environment to build a better
                  company and set a positive example for the world.
                </li>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <div className={styles.trim}>
        <img src="https://buffer.com/static/team/team-panorama.jpg" alt="" />
      </div>
      <section className={styles.trns}>
        <div className={styles.trsp}>
          <h2>Transparency</h2>
          <p>
            We try our best to live up to our value of "Default to
            Transparency." Here's an overview of a few of the things we've made
            transparent at Buffer.
          </p>
        </div>
        <section className={styles.csOpnL}>
          <div className={styles.iXhtha}>
            <a href="">
              <div>
                <div className={styles.lcZnln}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 61 60"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="3"
                  >
                    <path fill="none" d="M.381.011h60v59.991h-60z"></path>
                    <path
                      d="M33.568 22.297L37 13.335l-22.668-8.68-6.57 17.159"
                      fill="none"
                      stroke="#231f20"
                      stroke-width="2px"
                    ></path>
                    <path
                      d="M29.416 22.266l.712-1.859c-2.426-.929-3.572-3.826-2.56-6.471l-6.541-2.504c-1.013 2.644-3.8 4.034-6.227 3.105l-3.007 7.854M39 33.007V22.655H2v29.072h37V38.655"
                      fill="none"
                      stroke="#231f20"
                      stroke-width="2px"
                    ></path>
                    <path
                      d="M39 33.007H24.684a4.183 4.183 0 0 0-4.184 4.184v.001a4.184 4.184 0 0 0 4.184 4.184h8.085"
                      fill="none"
                      stroke="#231f20"
                      stroke-width="2px"
                    ></path>
                    <circle
                      cx="25.5"
                      cy="37.26"
                      r="1.5"
                      fill="#231f20"
                    ></circle>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.hh4}>Salaries</h4>
                  <p className={styles.fbILPC}>
                    All our salaries, and salary formula, are public.
                  </p>
                  <p className={styles.klOizA}>
                    Learn more
                    <ArrowForwardIcon />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.iXhtha}>
            <a href="">
              <div>
                <div className={styles.lcZnln}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 60 60"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="3"
                  >
                    <g fill="none">
                      <path d="M0 .011h60v59.991H0z"></path>
                      <g stroke="#231f20" stroke-width="2px">
                        <circle cx="20.156" cy="26.705" r="12.665"></circle>
                        <path d="M2 26.705c0-10.02 8.135-18.156 18.156-18.156M29.587 17.011L39.923 6.675M32.242 7.323l8.76-1.312-2.126 8.457M20.206 40.011V52.89M14.76 47.444h10.892"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.hh4}>Diversity</h4>
                  <p className={styles.fbILPC}>
                    We've open sourced our diversity & inclusion data.
                  </p>
                  <p className={styles.klOizA}>
                    Learn more
                    <ArrowForwardIcon />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.iXhtha}>
            <a href="">
              <div>
                <div className={styles.lcZnln}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 60 61"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="3"
                  >
                    <path fill="none" d="M0 .571h60v59.991H0z"></path>
                    <path
                      d="M40.325 48.728a23.021 23.021 0 0 0 2.204-2.574A22.886 22.886 0 0 0 47 32.533c0-12.694-10.306-23-23-23s-23 10.306-23 23c0 8.935 5.106 16.687 12.557 20.495.045.022.275.127.275.127l5.167-14.409a8.384 8.384 0 0 1-3.391-6.739A8.396 8.396 0 0 1 24 23.615a8.396 8.396 0 0 1 8.392 8.392 8.384 8.384 0 0 1-3.391 6.739l5.514 14.506"
                      fill="none"
                      stroke="#231f20"
                      stroke-width="2px"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.hh4}>Open Source</h4>
                  <p className={styles.fbILPC}>
                    All our code, free for anyone to use.
                  </p>
                  <p className={styles.klOizA}>
                    Learn more
                    <ArrowForwardIcon />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.iXhtha}>
            <a href="">
              <div>
                <div className={styles.lcZnln}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 60 61"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="3"
                  >
                    <g fill="none">
                      <path d="M0 .035h60v59.991H0z"></path>
                      <g stroke="#231f20" stroke-width="2px">
                        <path d="M25.351 33.559h4.762a8.47 8.47 0 0 0 8.471-8.47v-.003a8.47 8.47 0 0 0-8.471-8.47H19.396"></path>
                        <path d="M25.403 33.559H11.378a8.47 8.47 0 0 0-8.471 8.47v.003a8.47 8.47 0 0 0 8.471 8.47h21.303M8.065 6a6.068 6.068 0 0 1 6.065 6.065c0 4.675-6.065 13.376-6.065 13.376S2 16.444 2 12.065A6.068 6.068 0 0 1 8.065 6zM44.814 36.439a6.068 6.068 0 0 1 6.065 6.065c0 4.676-6.065 13.376-6.065 13.376s-6.065-8.996-6.065-13.376a6.068 6.068 0 0 1 6.065-6.065z"></path>
                        <circle cx="8.065" cy="12.535" r="2.394"></circle>
                        <circle cx="44.814" cy="42.914" r="2.394"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <h4 className={styles.hh4}>Product Roadmap </h4>
                  <p className={styles.fbILPC}>
                    Everything we're researching & building.
                  </p>
                  <p className={styles.klOizA}>
                    Learn more
                    <ArrowForwardIcon />
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </section>
      <section className={styles.team}>
        <div className={styles.tm}>
          <h2>Team</h2>
          <p>
            We’re committed to building a diverse team and a work environment
            that’s inclusive of people of all backgrounds. Get to know the
            wonderful team who’s building our product, supporting our customers,
            and creating educational content.
          </p>
          <div>
            <img
              src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/about-team@2x-v2.jpg"
              alt=""
            />
          </div>
          <div className={styles.b}>
            <Button colorScheme="blue" variant="outline">
              Get to know us better
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
