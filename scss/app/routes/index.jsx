import styled from 'styled-components';

export default function Index() {
  return (
    <StyledBox>
      <StyledHeading>Meeskond</StyledHeading>

      <StyledContentWrapper>
        <StyledImage src="https://slava-saun-cms.fly.dev/storage/media/13/Photo.png" alt="Meeskond" />

        <StyledRightSideContentWrapper>
          <StyledSubtitle>Alampealkiri</StyledSubtitle>

          <StyledParagraph>Ja siin on siis kirjeldus</StyledParagraph>

          <StyledButtonWrapper>
            <StyledSeeMoreLink href="/">
              <StyledSeeMoreLinkContent>Vaata veel {'>'}</StyledSeeMoreLinkContent>
            </StyledSeeMoreLink>
          </StyledButtonWrapper>
        </StyledRightSideContentWrapper>
      </StyledContentWrapper>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  background: #fff;
  max-width: 1200px;
  width: 100%;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  @media (min-width: 1024px) {
    padding: 48px 96px 48px 48px;
  }
`;

const StyledHeading = styled.h6`
  font-family: ${props => props.theme.fontFamily.display};
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
    line-height: 1;
  }

  margin: 0 32px 32px 0;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const StyledImage = styled.img`
  max-width: 400px;
  width: 100%;
  background: rgba(${props => props.theme.black}, 0.5);
  border-radius: 8px;

  @media (min-width: 1024px) {
    margin-right: 48px;
  }
`;

const StyledRightSideContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-top: 24px;
  }
`;

const StyledSubtitle = styled.span`
  font-family: ${props => props.theme.fontFamily.body};
  font-size: 24px;
  line-height: 32px;
  color: ${props => props.theme.colors.black};
  font-weight: 700;
`;

const StyledParagraph = styled.p`
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  line-height: 28px;
  margin-top: 12px;
  margin-bottom: 24px;
`;

const StyledButtonWrapper = styled.div`
  margin-top: auto;
`;

const StyledSeeMoreLinkContent = styled.span`
  transition: all 0.1s ${props => props.theme.transition.butter};
  display: flex;
  align-items: center;
  transform: translateY(0);
`;

const StyledSeeMoreLink = styled.a`
  background: transparent;
  border: none;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  font-family: ${props => props.theme.fontFamily.display};
  text-decoration: none;
  color: ${props => props.theme.colors.black};

  &:hover {
    ${StyledSeeMoreLinkContent} {
      transform: translateY(-8px);
    }
  }
`;
