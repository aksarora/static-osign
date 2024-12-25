import React from 'react';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';

const CancelAndReturnPolicy: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingLevel>
          <Heading>Cancel and Return Policy</Heading>
        </HeadingLevel>

        <HeadingLevel>
          <Heading styleLevel={3}>Cancellation Policy</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          Services once initiated cannot be canceled.
        </ParagraphMedium>
        <HeadingLevel>
          <Heading styleLevel={3}>Return Policy</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          Not applicable as no physical goods are involved.
        </ParagraphMedium>
        <HeadingLevel>
          <Heading styleLevel={3}>Amendment Rights</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          We reserve the right to amend this policy at any time without prior
          notification. Please check this page for updated Cancel & Return
          policy.
        </ParagraphMedium>
        <ParagraphMedium>
          No refunds unless service commitments are unmet.
        </ParagraphMedium>
      </Container>
    </Wrapper>
  );
};

export default CancelAndReturnPolicy;
