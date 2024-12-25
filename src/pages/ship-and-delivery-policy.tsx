import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';

const ShipAndDeliveryPolicy = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingLevel>
          <Heading styleLevel={2}>Ship & Delivery Policy</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          <strong>Electronic Delivery Only</strong>
        </ParagraphMedium>
        <ParagraphMedium>
          No physical delivery; all documents are returned online.
        </ParagraphMedium>
        <ParagraphMedium>
          Ensure a stable internet connection for smooth service execution.
        </ParagraphMedium>
        <HeadingLevel>
          <Heading styleLevel={3}>Amendment Rights</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          We reserve the right to amend this policy at any time without prior
          notification. Please check this page for updated Ship & Delivery
          policy.
        </ParagraphMedium>
      </Container>
    </Wrapper>
  );
};

export default ShipAndDeliveryPolicy;
