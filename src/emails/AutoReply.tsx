import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from "@react-email/components";

interface AutoReplyEmailProps {
  name: string;
  service: string;
}

export function AutoReplyEmail({ name, service }: AutoReplyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        We received your inquiry, {name} — Marshalls Tailoring
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Marshalls Tailoring</Heading>
            <Text style={headerSubtitle}>Lipa City, Batangas</Text>
          </Section>

          {/* Body */}
          <Section style={content}>
            <Heading style={h2}>Thank you, {name}!</Heading>
            <Text style={body}>
              We have received your inquiry about{" "}
              <strong>{service}</strong> and will get back to you as soon as
              possible.
            </Text>
            <Text style={body}>
              In the meantime, feel free to reach us directly:
            </Text>

            <Section style={infoBox}>
              <Text style={infoItem}>📍 2nd Floor, Bldg. 1, Lipa City Public Market, Lipa City, Batangas</Text>
              <Hr style={divider} />
              <Text style={infoItem}>📞 0945 273 1100 (Globe) · 0939 740 1011 (Smart)</Text>
              <Hr style={divider} />
              <Text style={infoItem}>📧 marshalls.tailoring@gmail.com</Text>
            </Section>

            <Text style={fbText}>
              You can also message us on{" "}
              <Link
                href="https://www.facebook.com/profile.php?id=100077176364725"
                style={fbLink}
              >
                Facebook
              </Link>
              .
            </Text>

            <Hr style={finalDivider} />
            <Text style={footer}>
              This is an automated confirmation. Please do not reply directly
              to this email. Use the contact details above to reach us.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = { backgroundColor: "#f8f8f6", fontFamily: "'Source Sans 3', Arial, sans-serif" };
const container = { maxWidth: "560px", margin: "0 auto" };
const header = { backgroundColor: "#1b3fa6", padding: "32px 40px", borderRadius: "12px 12px 0 0" };
const headerTitle = { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: 0, letterSpacing: "1px" };
const headerSubtitle = { color: "rgba(255,255,255,0.6)", fontSize: "12px", margin: "4px 0 0", letterSpacing: "2px", textTransform: "uppercase" as const };
const content = { backgroundColor: "#ffffff", padding: "32px 40px", borderRadius: "0 0 12px 12px", border: "1px solid #dde2ee", borderTop: "none" };
const h2 = { fontSize: "20px", fontWeight: "700", color: "#1a1f2e", marginBottom: "8px" };
const body = { color: "#4b5563", fontSize: "15px", lineHeight: "1.6", marginBottom: "0" };
const infoBox = { backgroundColor: "#f0f3fc", borderRadius: "8px", padding: "4px 20px", border: "1px solid #dde2ee", margin: "16px 0" };
const infoItem = { fontSize: "14px", color: "#1a1f2e", margin: "10px 0" };
const divider = { borderColor: "#dde2ee", margin: "0" };
const fbText = { color: "#4b5563", fontSize: "15px", lineHeight: "1.6" };
const fbLink = { color: "#1b3fa6", textDecoration: "underline" };
const finalDivider = { borderColor: "#dde2ee", margin: "24px 0 16px" };
const footer = { fontSize: "12px", color: "#9ca3af", lineHeight: "1.5", margin: 0 };
