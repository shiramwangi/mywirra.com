import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Preview,
  Tailwind,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface InvestorAllocationProps {
  investorName: string;
  shares: string;
  amount: string;
  equityPercent: string;
}

export default function InvestorAllocation({
  investorName = "Investor",
  shares = "10",
  amount = "50",
  equityPercent = "0.01",
}: InvestorAllocationProps) {
  return (
    <Html>
      {/* Tailwind wraps Head & Body for inline style injection */}
      <Tailwind>
        <Head />
        <Preview>Your Allocation is Confirmed.</Preview>
        <Body className="bg-[#2a2a2a] font-sans text-[#FDFBF7] my-auto mx-auto px-4 py-10">
          <Container className="border border-gray-700 rounded-2xl my-10 mx-auto p-10 max-w-xl bg-[#2a2a2a] shadow-2xl">
            
            {/* Brand Logo */}
            <Text className="text-3xl font-light tracking-tight text-[#FDFBF7] mb-8">
              Wirra<span className="text-[#F49B36] font-bold">.</span>
            </Text>
            
            {/* Header */}
            <Text className="text-3xl font-medium tracking-tight leading-snug mb-6 text-[#FDFBF7]">
              Your Allocation is Confirmed.
            </Text>
            
            {/* Body Copy */}
            <Text className="text-[#FDFBF7]/90 text-lg leading-relaxed mb-6">
              Hello {investorName},
            </Text>
            <Text className="text-[#FDFBF7]/90 text-lg leading-relaxed mb-8">
              Thank you for your commitment to Wirra. We are thrilled to welcome you to the investor network. Below is the official ledger of your secured allocation.
            </Text>
            
            {/* Receipt Block */}
            <Section className="bg-[#1F2420] rounded-xl p-8 mb-8 border border-gray-700">
              <Row className="mb-4">
                <Column>
                  <Text className="text-gray-400 text-base m-0 tracking-wide uppercase text-[12px] font-bold">Shares Allocated</Text>
                </Column>
                <Column align="right">
                  <Text className="text-[#FDFBF7] font-medium text-lg m-0">{shares}</Text>
                </Column>
              </Row>
              <Row className="mb-4">
                <Column>
                  <Text className="text-gray-400 text-base m-0 tracking-wide uppercase text-[12px] font-bold">Equity Granted</Text>
                </Column>
                <Column align="right">
                  <Text className="text-[#FDFBF7] font-medium text-lg m-0">{equityPercent}%</Text>
                </Column>
              </Row>
              <Hr className="border-gray-700 my-4" />
              <Row>
                <Column>
                  <Text className="text-gray-400 text-base m-0 tracking-wide uppercase text-[12px] font-bold">Total Commitment</Text>
                </Column>
                <Column align="right">
                  <Text className="text-[#F49B36] font-bold text-xl m-0">${amount}</Text>
                </Column>
              </Row>
            </Section>

            {/* Next Steps */}
            <Text className="text-[#FDFBF7]/90 text-lg leading-relaxed mb-8">
              If you have not already scheduled your onboarding call via the calendar widget on our site, our executive team will reach out shortly to coordinate.
            </Text>
            
            {/* CTA */}
            <Section className="text-left mt-8 mb-8">
              <Button
                className="bg-[#F49B36] text-[#1F2420] font-semibold text-lg rounded-full px-10 py-4 text-center transition-colors hover:bg-[#e08c31]"
                href="https://wirra.space"
              >
                Access Product
              </Button>
            </Section>
            
            {/* Footer */}
            <Hr className="border border-gray-700 my-8" />
            <Text className="text-gray-400 text-sm leading-relaxed">
              This is an automated confirmation processed securely by Wirra. For direct inquiries, please reply to this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}