import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Section = styled.section`
  margin: 2rem 0;
  background-color: ${props => props.theme.color.primary};
  padding: 2rem 0;
`;

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: ${props => props.theme.screen.laptop}) {
  padding: 0 2rem;
}
`

const Postcard = styled.a`
grid-column: 1 / -1;
min-width: 200px;
max-width: 650px;
box-shadow: 0 2px 15px rgba(0,0,0,.1);
transition: all .15s ease-in-out;
text-decoration: none;
color: inherit;
background-color: #fff;
margin: 0 auto;


:hover {
  box-shadow: 0 2px 30px rgba(0,0,0,.15);
  transform: translateY(-1px);
}

@media (min-width: ${props => props.theme.screen.laptop}) {
  grid-column: auto;
}
`

const PostcardImage = styled(Img)`
height: 200px;
`

const PostcardText = styled.div`
background-color: #ffffff;
padding: 2rem 1rem 1rem 1rem;
`


const siteSection = () => {
    const data = useStaticQuery(graphql`
    query {
      projectImage1: file(relativePath: { eq: "images/lwb.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
      projectImage2: file(relativePath: { eq: "images/brisharpe.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
      projectImage3: file(relativePath: { eq: "images/gatsby-2.png" }) {
        childImageSharp {
          fluid(maxWidth:1024) {
            ...GatsbyImageSharpFluid_withWebp
              }
        }
      }
    }
    `)
    return (
            <Section id="work">
                <WorkContainer>
                  <Postcard href="https://www.lifewithbenjamin.com/">
                    <PostcardImage fluid={data.projectImage1.childImageSharp.fluid} alt="Life With Benjamin"/>
                    <PostcardText>
                    <h4>www.lifewithbenjamin.com</h4>
                    <p>A personal blog and small business website for a creative professional who specializes in content creation, photography and videography.</p>
                    </PostcardText>
                  </Postcard>
                  <Postcard href="https://www.briannasharpe.com/">
                    <PostcardImage fluid={data.projectImage2.childImageSharp.fluid} alt="Life With Benjamin"/>
                    <PostcardText>
                    <h4>www.briannasharpe.com</h4>
                    <p>Brianna is a writer and yoga instructor who needed a better online presence for herself as her writing business grew and expanded.</p>
                    </PostcardText>
                  </Postcard>
                  <Postcard href="https://github.com/ehowey/gatsby-theme-catalyst-core">
                    <PostcardImage fluid={data.projectImage3.childImageSharp.fluid} alt="Life With Benjamin"/>
                    <PostcardText>
                    <h4>Gatsby Catalyst Theme</h4>
                    <p>These are a series of Gatsby themes and starter templates I created and open-sourced to speed up the development time for web projects.</p>
                    </PostcardText>
                  </Postcard>
                </WorkContainer>
            </Section>
    )
}

export default siteSection