import React from 'react'
import Box from '@mui/material/Box'
import BlogItem from './BlogItem'
import { ButtonLink, Section } from '../../component'

export function Blog() {
  return (
    <Section title="Blog">
      <BlogItem
        title="Building a Custom Finance Dashboard Using Multiple Payment Provider APIs"
        image="https://miro.medium.com/fit/c/224/224/1*IfnVNVWRyiywAW4iM0BGvg.png"
        created="Oct 16, 2022"
        link="https://alex-broadbent.medium.com/building-a-custom-finance-dashboard-using-multiple-payment-provider-apis-1fbb25673420"
      >
        The client, Handmade in Harpenden, have multiple streams of revenue, varying from B2C and
        B2B, which made it difficult for the team to capture accurate sales in real time…
      </BlogItem>
      <BlogItem
        title="Learnings from Devoxx 2022"
        image="https://miro.medium.com/fit/c/224/224/1*r-OZRSCDHsWHHSN8sLp7nw.jpeg"
        created="Aug 19, 2022"
        link="https://alex-broadbent.medium.com/learnings-from-devoxx-2022-27fe6d6b4d25"
      >
        Here are my highlights from this year’s conference if you missed it. It’s clear there has
        been a lot of excitement around the future of Java version 18 and this conference was no
        java.lang.Exception! I had the pleasure of attending…
      </BlogItem>
      <BlogItem
        title="Writing an IntelliJ Plugin for Inserting Timestamps"
        image="https://miro.medium.com/fit/c/224/224/0*Q_vcCH6CFOd-1qGd"
        created="Jul 24, 2022"
        link="https://alex-broadbent.medium.com/writing-an-intellij-plugin-for-inserting-timestamps-2cbe6f09b4f8"
      >
        Whilst writing a lot of tests involving time-based functions, I got tired of having to
        manually write out full timestamps, I was copying and pasting timestamps then changed 1 or 2
        numbers to make them unique for the test case. This became a repetitive task that strained
        my fingers from hitting copy and paste too much…
      </BlogItem>
      <BlogItem
        title="Easy JSON in Kotlin with a Type-Safe Builder DSL"
        image="https://miro.medium.com/max/1400/0*pJcTGzqkIZypeT_u"
        created="Jan 8, 2022"
        link="https://alex-broadbent.medium.com/writing-a-dsl-in-kotlin-42a9029b93a6"
      >
        After learning of the type-safe builders in Kotlin in 2019, I wanted to create a
        domain-specific language (DSL) to avoid having to use the rather cumbersome creation pattern
        in Jackson. I felt like Bob the Builder after writing <code>mapper.createObjectNode()</code>{' '}
        too many times…
      </BlogItem>
      <BlogItem
        title="Levels of a Software Engineer"
        image="https://miro.medium.com/fit/c/224/224/0*B96zvzsj-DG1bMbw"
        created="Aug 6, 2021"
        link="https://medium.com/interviewnoodle/levels-of-a-software-engineer-interview-c4abc78c4d"
      >
        There are different types of questions that are asked in Software Engineering interviews
        which are aimed to only be answered by more experienced developers and then there are
        questions that differentiate candidates based on the detail they give…
      </BlogItem>
      <BlogItem
        title="Transitioning from Backend to Full-Stack Development"
        image="https://miro.medium.com/fit/c/224/224/1*4ePArUHl-hfBLid7OGaqLw.jpeg"
        created="Mar 18, 2021"
        link="https://medium.com/@alex-broadbent/transitioning-into-full-stack-development-1f9784cdad46"
      >
        After working in the backend JVM world for 5 years, there were a lot of interesting
        challenges when moving from a backend engineer position at Flux to a full-stack engineer
        role at Freetrade (where I currently work)…
      </BlogItem>

      <Box sx={{ pt: 3, pb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ButtonLink href="https://alex-broadbent.medium.com">
          View all my Blog Posts on Medium
        </ButtonLink>
      </Box>
    </Section>
  )
}
