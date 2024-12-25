import React from 'react';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';
import {HeadingLarge, ParagraphMedium} from 'baseui/typography';

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <HeadingLarge>Welcome to OTP Sign</HeadingLarge>
          <ParagraphMedium>Something big is coming soon</ParagraphMedium>
        </div>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
