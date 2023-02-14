import Grid from '@mui/material/Unstable_Grid2'
import {
  ArtifactLink,
  BlogLink,
  ButtonLink,
  CodeLink,
  ListSectionCard,
  Paragraph,
  Section,
  TextLink
} from '../component'

export const Portfolio = () => (
  <Section title="Portfolio">
    <Grid container spacing={2} alignItems="stretch">
      <ListSectionCard
        title="Handmade in Harpenden Dashboard"
        actions={[
          <BlogLink
            key={0}
            href="https://alex-broadbent.medium.com/building-a-custom-finance-dashboard-using-multiple-payment-provider-apis-1fbb25673420"
          />
        ]}
        tech={['TypeScript', 'React', 'GCP']}
      >
        <Paragraph>
          A bespoke dashboard plugged in multiple APIs from POS providers to track online and
          offline sales and targets in real time. The project used serverless functions in Google
          Cloud Platform for the backend and a bespoke website written in React for the frontend.
        </Paragraph>
      </ListSectionCard>
      <ListSectionCard
        title="Money Utility Library"
        actions={[
          <BlogLink
            key={2}
            href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3"
          />,
          <CodeLink key={0} href="https://github.com/AlexBroadbent/money" />,
          <ArtifactLink
            key={1}
            href="https://mvnrepository.com/artifact/com.abroadbent/money-core"
          />
        ]}
        tech={['Kotlin', 'Maven', 'GitHub Actions']}
      >
        <Paragraph>
          An implementation of how money should be stored and serialized from my previous
          experience. This stores money in its lowest denomination (eg. £1.50 as 150) and provides
          serialization and deserialization wrappers for popular libraries like{' '}
          <TextLink href="https://github.com/FasterXML/jackson">Jackson</TextLink>,{' '}
          <TextLink href="https://github.com/google/gson">Gson</TextLink>, and{' '}
          <TextLink href="https://github.com/Kotlin/kotlinx.serialization">
            KotlinX Serialization
          </TextLink>
          .
        </Paragraph>
      </ListSectionCard>
      <ListSectionCard
        title="JSON DSL"
        actions={[
          <BlogLink
            key={2}
            href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3"
          />,
          <CodeLink key={0} href="https://github.com/AlexBroadbent/json-dsl" />,
          <ArtifactLink
            key={1}
            href="https://mvnrepository.com/artifact/com.abroadbent/jackson-dsl"
          />
        ]}
        tech={['Kotlin', 'Maven', 'GitHub Actions']}
      >
        <Paragraph>
          I found the builder pattern of Jackson&apos;s <code>ObjectMapper</code> to be cumbersome,
          so I wrote a Kotlin DSL (domain-specific language) wrapper to make a delightful syntax
          which is a joy to use.
        </Paragraph>
      </ListSectionCard>
      <ListSectionCard
        title="Timestamp Generator Plugin"
        actions={[
          <BlogLink
            key={2}
            href="https://alex-broadbent.medium.com/writing-an-intellij-plugin-for-inserting-timestamps-2cbe6f09b4f8"
          />,
          <CodeLink key={0} href="https://github.com/AlexBroadbent/timestamp-generator-plugin" />,
          <ButtonLink key={1} href="https://plugins.jetbrains.com/plugin/13012-timestamp-generator">
            View Plugin
          </ButtonLink>
        ]}
        tech={['Kotlin', 'Plugin', 'Maven', 'GitHub Actions']}
      >
        <Paragraph>
          I wrote a plugin for all Jetbrains IDEs (IntelliJ, WebStorm, etc.) that can generate a
          timestamp. While writing unit tests I found that creating a new timestamp for each test
          case was a slow process so I wrote a plugin that inserts a timestamp through a keyboard
          shortcut and then published the plugin for public use.
        </Paragraph>
      </ListSectionCard>
    </Grid>
  </Section>
)
