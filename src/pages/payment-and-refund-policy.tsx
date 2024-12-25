import React from 'react';
import {Heading, HeadingLevel} from 'baseui/heading';
import {ParagraphMedium} from 'baseui/typography';
import {ListItem, ListItemLabel} from 'baseui/list';
import {Wrapper} from '../components/wrapper';
import {Container} from '../components/container';

const PaymentAndRefundPolicy: React.FC = () => {
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
          the bank within 5-7 working days. If it's believed the payment has
          reached us erroneously, contact us with transaction details at{' '}
          <a href="mailto:support@otpsign.com">support@otpsign.com</a>.
        </ParagraphMedium>
        <ParagraphMedium>
          To assist us in resolving your transaction issue, please provide the
          following details:
        </ParagraphMedium>
        <ul>
          <ListItem>
            <ListItemLabel>
              <strong>Transaction ID:</strong> The unique identifier given by
              your bank or payment processor.
            </ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>
              <strong>Transaction Date and Time:</strong> To help us locate the
              payment reference.
            </ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>
              <strong>Order Number:</strong> If applicable, to tie the payment
              to your specific service request.
            </ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>
              <strong>Payment Method Details:</strong> Including UPI or debit
              card usage with any available masked numbers.
            </ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>
              <strong>User Account Information:</strong> Such as the email
              associated with your OTPSign.com account.
            </ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>
              <strong>Screenshots or a Bank Statement:</strong> For verification
              purposes, ensuring sensitive information is redacted.
            </ListItemLabel>
          </ListItem>
          <ListItem>
            <ListItemLabel>
              <strong>Narrative of the Issue:</strong> To describe any problems
              experienced.
            </ListItemLabel>
          </ListItem>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default PaymentAndRefundPolicy;
