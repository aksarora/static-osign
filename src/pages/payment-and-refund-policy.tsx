import React from 'react';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {ListItem, ListItemLabel} from 'baseui/list';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';
import {useStyletron} from 'baseui';

const PaymentAndRefundPolicy: React.FC = () => {
  const [css, theme] = useStyletron();
  return (
    <Wrapper>
      <Container>
        <HeadingLevel>
          <Heading>Payment and Refund Policy</Heading>
        </HeadingLevel>

        <HeadingLevel>
          <Heading styleLevel={2}>Accepted Payment Methods</Heading>
        </HeadingLevel>
        <ParagraphMedium>UPI and Debit Card only.</ParagraphMedium>

        <HeadingLevel>
          <Heading styleLevel={2}>Refund Policy</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          For refunds, write to{' '}
          <a href="mailto:support@otpsign.com">support@otpsign.com</a> with your
          order number and contact details.
        </ParagraphMedium>

        <HeadingLevel>
          <Heading styleLevel={2}>Failed Transactions</Heading>
        </HeadingLevel>
        <ParagraphMedium>
          In the case of failed transactions, payments are generally refunded by
          the bank within 5-7 working days. If it&apos;s believed the payment
          has reached us erroneously, contact us with transaction details at{' '}
          <a href="mailto:support@otpsign.com">support@otpsign.com</a>.
        </ParagraphMedium>
        <ParagraphMedium>
          To assist us in resolving your transaction issue, please provide the
          following details:
        </ParagraphMedium>
        <ul className={css({margin: 0, padding: 0})}>
          <ListItem
            overrides={{
              Root: {
                style: {
                  padding: `${theme.sizing.scale400} 0`,
                },
              },
            }}
          >
            <ListItemLabel description="The unique identifier given by your bank or payment processor.">
              <strong>Transaction ID:</strong>
            </ListItemLabel>
          </ListItem>
          <ListItem
            overrides={{
              Root: {
                style: {
                  padding: `${theme.sizing.scale400} 0`,
                },
              },
            }}
          >
            <ListItemLabel description="To help us locate the payment reference.">
              <strong>Transaction Date and Time:</strong>
            </ListItemLabel>
          </ListItem>
          <ListItem
            overrides={{
              Root: {
                style: {
                  padding: `${theme.sizing.scale400} 0`,
                },
              },
            }}
          >
            <ListItemLabel description="If applicable, to tie the payment to your specific service request.">
              <strong>Order Number:</strong>
            </ListItemLabel>
          </ListItem>
          <ListItem
            overrides={{
              Root: {
                style: {
                  padding: `${theme.sizing.scale400} 0`,
                },
              },
            }}
          >
            <ListItemLabel description="Including UPI or debit card usage with any available masked numbers.">
              <strong>Payment Method Details:</strong>
            </ListItemLabel>
          </ListItem>
          <ListItem
            overrides={{
              Root: {
                style: {
                  padding: `${theme.sizing.scale400} 0`,
                },
              },
            }}
          >
            <ListItemLabel description="Such as the email associated with your OTPSign.com account.">
              <strong>User Account Information:</strong>
            </ListItemLabel>
          </ListItem>
          <ListItem
            overrides={{
              Root: {
                style: {
                  padding: `${theme.sizing.scale400} 0`,
                },
              },
            }}
          >
            <ListItemLabel description="For verification purposes, ensuring sensitive information is redacted.">
              <strong>Screenshots or a Bank Statement:</strong>
            </ListItemLabel>
          </ListItem>
          <ListItem
            overrides={{
              Root: {
                style: {
                  padding: `${theme.sizing.scale400} 0`,
                },
              },
            }}
          >
            <ListItemLabel description="To describe any problems experienced.">
              <strong>Narrative of the Issue:</strong>
            </ListItemLabel>
          </ListItem>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default PaymentAndRefundPolicy;
