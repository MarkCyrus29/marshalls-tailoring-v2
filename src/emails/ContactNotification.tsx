import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function ContactNotificationEmail({
  name,
  email,
  phone,
  service,
  message,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New inquiry from {name} — {service}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Marshalls Tailoring</Heading>
            <Text style={headerSubtitle}>New Website Inquiry</Text>
          </Section>

          {/* Body */}
          <Section style={content}>
            <Heading style={h2}>You have a new inquiry</Heading>
            <Text style={body}>
              Someone contacted you through the Marshalls Tailoring website.
              Here are the details:
            </Text>

            <Section style={infoBox}>
              <Row>
                <Column style={labelCol}>
                  <Text style={label}>Name</Text>
                </Column>
                <Column>
                  <Text style={value}>{name}</Text>
                </Column>
              </Row>
              <Hr style={divider} />
              <Row>
                <Column style={labelCol}>
                  <Text style={label}>Email</Text>
                </Column>
                <Column>
                  <Text style={value}>{email}</Text>
                </Column>
              </Row>
              <Hr style={divider} />
              <Row>
                <Column style={labelCol}>
                  <Text style={label}>Phone</Text>
                </Column>
                <Column>
                  <Text style={value}>{phone}</Text>
                </Column>
              </Row>
              <Hr style={divider} />
              <Row>
                <Column style={labelCol}>
                  <Text style={label}>Service</Text>
                </Column>
                <Column>
                  <Text style={value}>{service}</Text>
                </Column>
              </Row>
            </Section>

            <Heading style={h3}>Message</Heading>
            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Text style={footer}>
              Reply directly to this email to respond to {name} at {email}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = { backgroundColor: "#f8f8f6", fontFamily: "'Source Sans 3', Arial, sans-serif" };
const container = { maxWidth: "600px", margin: "0 auto" };
const header = { backgroundColor: "#1b3fa6", padding: "32px 40px", borderRadius: "12px 12px 0 0" };
const headerTitle = { color: "#ffffff", fontSize: "24px", fontWeight: "700", margin: 0, letterSpacing: "1px" };
const headerSubtitle = { color: "rgba(255,255,255,0.65)", fontSize: "13px", margin: "6px 0 0", letterSpacing: "2px", textTransform: "uppercase" as const };
const content = { backgroundColor: "#ffffff", padding: "32px 40px", borderRadius: "0 0 12px 12px", border: "1px solid #dde2ee", borderTop: "none" };
const h2 = { fontSize: "20px", fontWeight: "700", color: "#1a1f2e", marginBottom: "8px" };
const h3 = { fontSize: "15px", fontWeight: "600", color: "#1a1f2e", marginTop: "24px", marginBottom: "8px" };
const body = { color: "#4b5563", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" };
const infoBox = { backgroundColor: "#f8f8f6", borderRadius: "8px", padding: "4px 16px", border: "1px solid #dde2ee" };
const labelCol = { width: "120px" };
const label = { fontSize: "12px", fontWeight: "600", color: "#9ca3af", textTransform: "uppercase" as const, letterSpacing: "0.5px", margin: "10px 0" };
const value = { fontSize: "15px", color: "#1a1f2e", margin: "10px 0" };
const divider = { borderColor: "#dde2ee", margin: "0" };
const messageBox = { backgroundColor: "#f0f3fc", borderRadius: "8px", padding: "16px 20px", border: "1px solid #dde2ee", marginTop: "4px" };
const messageText = { fontSize: "15px", color: "#1a1f2e", lineHeight: "1.7", margin: 0 };
const footer = { fontSize: "13px", color: "#9ca3af", marginTop: "24px", lineHeight: "1.5" };
