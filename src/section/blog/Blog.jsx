import React from 'react'
import { Box, Grid } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import BlogItem from './BlogItem'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1)
    }
  })
)

function Blog() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid direction="column" justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <BlogItem
            title="Publishing an anti-bikeshedding money library to Maven Central"
            image="https://miro.medium.com/freeze/fit/c/224/224/0*K__J8gbBUU5Z3_m0.gif"
            created="Nov 25"
            link="https://alex-broadbent.medium.com/publishing-an-anti-bikeshedding-money-library-to-maven-central-c997a7ce97a3"
          >
            Every company that I have worked at represents and handles Money in different ways. I
            thought that there should be a simple library that allows for anti-bikeshedding when
            using Money within an organisation. Whilst the notion of storing an amount of money is
            simple, there are…
          </BlogItem>
        </Grid>
        <Grid item xs={12}>
          <BlogItem
            title="Levels of a Software Engineer"
            image="https://miro.medium.com/fit/c/224/224/0*B96zvzsj-DG1bMbw"
            created="Aug 6"
            link="https://medium.com/interviewnoodle/levels-of-a-software-engineer-interview-c4abc78c4d"
          >
            There are different types of questions that are asked in Software Engineering interviews
            which are aimed to only be answered by more experienced developers and then there are
            questions that differentiate candidates based on the detail they give…
          </BlogItem>
        </Grid>
        <Grid item xs={12}>
          <BlogItem
            title="Integrating with a third-party SOAP API from Serverless Cloud Functions"
            image="https://miro.medium.com/fit/c/224/224/0*DaZl0-hLsJHsF4PK"
            created="May 14"
            link="https://medium.com/@alex-broadbent/integrating-with-a-third-party-soap-api-from-serverless-cloud-functions-e5974ade0ca9"
          >
            Integrating with external APIs should be a simple task for any software engineer, almost
            all companies will rely on external parties or integrations which means that writing an
            integration should be a simple task…
          </BlogItem>
        </Grid>
        <Grid item xs={12}>
          <BlogItem
            title="Transitioning from Backend to Full-Stack Development"
            image="https://miro.medium.com/fit/c/224/224/1*4ePArUHl-hfBLid7OGaqLw.jpeg"
            created="Mar 18"
            link="https://medium.com/@alex-broadbent/transitioning-into-full-stack-development-1f9784cdad46"
          >
            After working in the backend JVM world for 5 years, there were a lot of interesting
            challenges when moving from a backend engineer position at Flux to a full-stack engineer
            role at Freetrade (where I currently work)…
          </BlogItem>
        </Grid>
        <Grid item xs={12}>
          <BlogItem
            title="My Experience in Improving On-Call Processes"
            image="https://miro.medium.com/fit/c/224/224/0*gpI2CkrYQAxsnQ3D"
            created="Feb 24"
            link="https://medium.com/@alex-broadbent/my-experience-in-improving-on-call-processes-bc6c73e5ed91"
          >
            Since working at startups involves working all hours of the day and night, I have worked
            on-call in some capacity at each company that I have worked at. There are good and bad
            processes to take in setting up the process and I hope that my experiences shared here
            will be of some help in lessening the burden…
          </BlogItem>
        </Grid>
        <Grid item xs={12}>
          <BlogItem
            title="How we use feature flagging in client apps at Freetrade"
            image="https://miro.medium.com/fit/c/224/224/1*DGYcwBkoWloGZ-vV4W02tA.jpeg"
            created="Feb 14"
            link="https://medium.com/@alex-broadbent/how-we-use-feature-flagging-in-client-apps-at-freetrade-accd78947fcb"
          >
            We use feature flags to be able to quickly and safely develop features without
            disrupting other teams at Freetrade. While making changes on the Android and iOS apps we
            will enable features only for staff and our beta testers so we can get feedback in our
            live environment as we develop them…
          </BlogItem>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Blog
