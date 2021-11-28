import React from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { CardActions, Grid, Stack, Typography } from '@mui/material'
import PortfolioItem from './PortfolioItem'
import TextLink from '../../component/TextLink'
import ButtonLink from '../../component/ButtonLink'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1)
    }
  })
)

function Portfolio() {
  const classes = useStyles()

  return (
    <Stack direction="column" alignItems="center" justifyContent="center" className={classes.root}>
      <PortfolioItem title="Handmade in Harpenden Dashboard" imageUri="dashboard.png">
        <Grid container item>
          <Typography variant="body2" sx={{ mb: 1 }}>
            The client had many sources of income which made it hard to see how their business was
            performing. A bespoke dashboard was created to account for all the business logic
            required to calculate the current total income for the business.
          </Typography>
          <Typography variant="body2">
            This required writing a set of serverless functions in NodeJS for Google Cloud Functions
            and a website written in React to display the results. All data is stored in Google
            Firestore which allows for analytical analysis and targets.
          </Typography>
        </Grid>
      </PortfolioItem>
      <PortfolioItem title="Money Library" imageUri="money.png">
        <Grid container item>
          <Typography variant="body2">
            After working around different companies which all had an implementation of what “money”
            looks like in a class I thought I should write my own library of what I thought was the
            best features from each implementation. The key features are to store money in its
            lowest denomination (eg. £1.50 as 150) and to provide serialization and deserialization
            wrappers for popular libraries like{' '}
            <TextLink href="https://github.com/FasterXML/jackson">Jackson</TextLink>,{' '}
            <TextLink href="https://github.com/google/gson">Gson</TextLink>, and{' '}
            <TextLink href="https://github.com/Kotlin/kotlinx.serialization">
              KotlinX Serialization
            </TextLink>
            .
          </Typography>
          <CardActions>
            <ButtonLink href="https://github.com/AlexBroadbent/money">View Source Code</ButtonLink>
            <ButtonLink href="https://mvnrepository.com/artifact/uk.co.alexbroadbent/money-core">
              Artifacts on Maven Central
            </ButtonLink>
            <ButtonLink href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3">
              Blog Post
            </ButtonLink>
          </CardActions>
        </Grid>
      </PortfolioItem>
      <PortfolioItem title="Jackson DSL" imageUri="jackson-dsl.png">
        <Typography variant="body2" sx={{ mb: 1 }}>
          A portal for combining all sources of income into a single dashboard. As a small business,
          HIH did not want to spend their time having to go through each source of income and adding
          them up every day to work out if they were on target for the month.
        </Typography>
        <Typography variant="body2">
          By building a single portal, they have a one-stop place to see if they are on target for
          the month and a way to check their targets against previous months and years.
        </Typography>
        <CardActions>
          <ButtonLink href="https://github.com/AlexBroadbent/money">View Source Code</ButtonLink>
          <ButtonLink href="https://mvnrepository.com/artifact/uk.co.alexbroadbent/money-core">
            Artifacts on Maven Central
          </ButtonLink>
          <ButtonLink href="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3">
            Blog Post
          </ButtonLink>
        </CardActions>
      </PortfolioItem>
      <PortfolioItem title="Timestamp Generator Plugin" imageUri="timestamp-generator.png">
        <Grid container item>
          <Typography variant="body2" sx={{ mb: 1 }}>
            A portal for combining all sources of income into a single dashboard. As a small
            business, HIH did not want to spend their time having to go through each source of
            income and adding them up every day to work out if they were on target for the month.
          </Typography>
          <Typography variant="body2">
            By building a single portal, they have a one-stop place to see if they are on target for
            the month and a way to check their targets against previous months and years.
          </Typography>
          <CardActions>
            <ButtonLink href="https://github.com/AlexBroadbent/timestamp-generator-plugin">
              View Source Code
            </ButtonLink>
            <ButtonLink href="https://plugins.jetbrains.com/plugin/13012-timestamp-generator">
              View Plugin on Jetbrains Marketplace
            </ButtonLink>
            <ButtonLink href="#" disabled>
              Blog Post Coming Soon
            </ButtonLink>
          </CardActions>
        </Grid>
      </PortfolioItem>
    </Stack>
  )
}

export default Portfolio
