import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';

const ContactUs = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingLevel>
          <Heading styleLevel={2}>Reach Out to Us</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          <strong>Customer Support:</strong> support@otpsign.com
        </ParagraphMedium>
        {/* <ParagraphMedium>
          <strong>Phone:</strong> +91 9582223889
        </ParagraphMedium> */}
        <ParagraphMedium>
          <strong>Business Hours:</strong> 10 am - 6 pm
        </ParagraphMedium>
      </Container>
    </Wrapper>
  );
};

export default ContactUs;
