import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ButtonLink, ListSectionItem, Section, TextLink } from '../component'

const useStyles = makeStyles((theme) =>
  createStyles({
    linkStack: {
      paddingTop: theme.spacing(1)
    },
    content: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  })
)

export function Portfolio() {
  const classes = useStyles()

  return (
    <Section title="Portfolio">
      <ListSectionItem image="dashboard.png" title="Handmade in Harpenden Dashboard">
        <Typography variant="body2" className={classes.content}>
          The client had many sources of income which made it hard to see how well their business is
          performing in real time. A bespoke dashboard was created to account for all the business
          logic required to calculate the current total income for the business from different
          revenue streams, covering B2B, B2C, online, in store and via third party marketplaces.
        </Typography>
        <Typography variant="body2" className={classes.content}>
          The project required writing a set of serverless functions in Google Cloud Platform for
          the backend and a bespoke website written in React for the frontend.
        </Typography>
      </ListSectionItem>
      <ListSectionItem
        image="money.png"
        title="Money Library"
        actions={
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} className={classes.linkStack}>
            <ButtonLink href="https://github.com/AlexBroadbent/money">
              View Source Code on GitHub
            </ButtonLink>
            <ButtonLink href="https://mvnrepository.com/artifact/com.abroadbent/money-core">
              View Artifacts on Maven Central
            </ButtonLink>
            <ButtonLink href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3">
              Read Blog Post on Medium
            </ButtonLink>
          </Stack>
        }
      >
        <Typography variant="body2" className={classes.content}>
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
        </Typography>
      </ListSectionItem>
      <ListSectionItem
        image="jackson-dsl-2.png"
        title="JSON DSL"
        actions={
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} className={classes.linkStack}>
            <ButtonLink href="https://github.com/AlexBroadbent/json-dsl">
              View Source Code on GitHub
            </ButtonLink>
            <ButtonLink href="https://mvnrepository.com/artifact/com.abroadbent/jackson-dsl">
              View Artifacts on Maven Central
            </ButtonLink>
            <ButtonLink href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3">
              Read Blog Post on Medium
            </ButtonLink>
          </Stack>
        }
      >
        <Typography variant="body2" className={classes.content}>
          I found the builder pattern of Jackson’s ObjectMapper to be cumbersome, so I wrote a
          Kotlin DSL (domain-specific language) wrapper to make a delightful syntax which is a joy
          to use.
        </Typography>
      </ListSectionItem>
      <ListSectionItem
        image="timestamp-generator.png"
        title="Timestamp Generator Plugin"
        actions={
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} className={classes.linkStack}>
            <ButtonLink href="https://github.com/AlexBroadbent/timestamp-generator-plugin">
              View Source Code on GitHub
            </ButtonLink>
            <ButtonLink href="https://plugins.jetbrains.com/plugin/13012-timestamp-generator">
              View Plugin on Jetbrains Marketplace
            </ButtonLink>
            <ButtonLink href="https://alex-broadbent.medium.com/writing-an-intellij-plugin-for-inserting-timestamps-2cbe6f09b4f8">
              Read Blog Post on Medium
            </ButtonLink>
          </Stack>
        }
      >
        <Typography variant="body2" className={classes.content}>
          I wrote a plugin for all Jetbrains IDEs (IntelliJ, WebStorm, etc.) that can generate a
          timestamp. While writing unit tests I found that creating a new timestamp for each test
          case was a slow process so I wrote a plugin that inserts a timestamp through a keyboard
          shortcut and then published the plugin for public use.
        </Typography>
      </ListSectionItem>
    </Section>
  )
}
