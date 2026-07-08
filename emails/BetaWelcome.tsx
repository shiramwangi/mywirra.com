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
} from "@react-email/components";
import * as React from "react";

interface BetaWelcomeProps {
  firstName: string;
}

export const BetaWelcome = ({ firstName = "there" }: BetaWelcomeProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the Future of Hiring.</Preview>
      <Tailwind>
        <Body className="bg-[#2a2a2a] font-sans text-[#FDFBF7] my-auto mx-auto px-4 py-10">
          <Container className="border border-gray-700 rounded-2xl my-10 mx-auto p-10 max-w-xl bg-[#2a2a2a] shadow-2xl">
            
            {/* Brand Logo */}
            <Text className="text-3xl font-light tracking-tight text-[#FDFBF7] mb-8">
              Wirra<span className="text-[#F49B36] font-bold">.</span>
            </Text>
            
            {/* Header */}
            <Text className="text-3xl font-medium tracking-tight leading-snug mb-6 text-[#FDFBF7]">
              Welcome to the Future of Hiring.
            </Text>
            
            {/* Body Copy */}
            <Text className="text-[#FDFBF7]/90 text-lg leading-relaxed mb-6">
              Hello {firstName},
            </Text>
            <Text className="text-[#FDFBF7]/90 text-lg leading-relaxed mb-8">
              Thank you for requesting beta access to Wirra. We are currently provisioning your account and setting up your workspace environment. 
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
              If you have any questions during this rollout phase, simply reply to this email. We are here to help.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default BetaWelcome;