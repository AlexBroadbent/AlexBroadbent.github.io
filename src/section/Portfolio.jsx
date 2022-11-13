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
    <Grid container spacing={2}>
      <ListSectionCard
        image="hih-chart.png"
        title="Handmade in Harpenden Dashboard"
        actions={[
          <BlogLink
            key={0}
            href="https://alex-broadbent.medium.com/building-a-custom-finance-dashboard-using-multiple-payment-provider-apis-1fbb25673420"
          />
        ]}
      >
        <Paragraph>
          The client had many sources of income which made it hard to see how well their business is
          performing in real time. A bespoke dashboard was created to account for all the business
          logic required to calculate the current total income for the business from different
          revenue streams, covering B2B, B2C, online, in store and via third party marketplaces.
        </Paragraph>
        <Paragraph>
          The project required writing a set of serverless functions in Google Cloud Platform for
          the backend and a bespoke website written in React for the frontend.
        </Paragraph>
      </ListSectionCard>
      <ListSectionCard
        image="money.png"
        title="Money Utility Library"
        actions={[
          <CodeLink key={0} href="https://github.com/AlexBroadbent/money" />,
          <ArtifactLink
            key={1}
            href="https://mvnrepository.com/artifact/com.abroadbent/money-core"
          />,
          <BlogLink
            key={2}
            href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3"
          />
        ]}
      >
        <Paragraph>
          After working around different companies which all had an implementation of what “money”
          looks like in a class I thought I should write my own library of what I thought was the
          best features from each implementation. The key features are to store money in its lowest
          denomination (eg. £1.50 as 150) and to provide serialization and deserialization wrappers
          for popular libraries like{' '}
          <TextLink href="https://github.com/FasterXML/jackson">Jackson</TextLink>,{' '}
          <TextLink href="https://github.com/google/gson">Gson</TextLink>, and{' '}
          <TextLink href="https://github.com/Kotlin/kotlinx.serialization">
            KotlinX Serialization
          </TextLink>
          .
        </Paragraph>
      </ListSectionCard>
      <ListSectionCard
        image="json-dsl.png"
        title="JSON DSL"
        actions={[
          <CodeLink key={0} href="https://github.com/AlexBroadbent/json-dsl" />,
          <ArtifactLink
            key={1}
            href="https://mvnrepository.com/artifact/com.abroadbent/jackson-dsl"
          />,
          <BlogLink
            key={2}
            href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3"
          />
        ]}
      >
        <Paragraph>
          I found the builder pattern of Jackson’s ObjectMapper to be cumbersome, so I wrote a
          Kotlin DSL (domain-specific language) wrapper to make a delightful syntax which is a joy
          to use.
        </Paragraph>
      </ListSectionCard>
      <ListSectionCard
        image="timestamp-generator.png"
        title="Timestamp Generator Plugin"
        actions={[
          <CodeLink key={0} href="https://github.com/AlexBroadbent/timestamp-generator-plugin" />,
          <ButtonLink key={1} href="https://plugins.jetbrains.com/plugin/13012-timestamp-generator">
            View Plugin on Jetbrains Marketplace
          </ButtonLink>,
          <BlogLink
            key={2}
            href="https://alex-broadbent.medium.com/writing-an-intellij-plugin-for-inserting-timestamps-2cbe6f09b4f8"
          />
        ]}
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
