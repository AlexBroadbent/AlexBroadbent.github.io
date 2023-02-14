import Grid from '@mui/material/Unstable_Grid2'
import { Section } from '../../component'
import { BlogItem } from './BlogItem'

export const Blog = () => (
  <Section title="Blog">
    <Grid container spacing={2}>
      <BlogItem
        title="How We Embrace Being a Design-Driven API at SAPI"
        created="Nov 23, 2022"
        link="https://medium.com/sapigroup/how-we-embrace-being-a-design-driven-api-at-sapi-f268581a544f"
      >
        We have all been there when you look at the documentation and write a client that fetches
        some data, only to then find that the response…
      </BlogItem>
      <BlogItem
        title="Building a Custom Finance Dashboard Using Multiple Payment Provider APIs"
        created="Oct 16, 2022"
        link="https://alex-broadbent.medium.com/building-a-custom-finance-dashboard-using-multiple-payment-provider-apis-1fbb25673420"
      >
        The client, Handmade in Harpenden, have multiple streams of revenue, varying from B2C and
        B2B, which made it difficult for the team to…
      </BlogItem>
      <BlogItem
        title="Learnings from Devoxx 2022"
        created="Aug 19, 2022"
        link="https://alex-broadbent.medium.com/learnings-from-devoxx-2022-27fe6d6b4d25"
      >
        Here are my highlights from this year’s conference if you missed it. It’s clear there has
        been a lot of excitement around the future of Java…
      </BlogItem>
      <BlogItem
        title="Writing an IntelliJ Plugin for Inserting Timestamps"
        created="Jul 24, 2022"
        link="https://alex-broadbent.medium.com/writing-an-intellij-plugin-for-inserting-timestamps-2cbe6f09b4f8"
      >
        Whilst writing a lot of tests involving time-based functions, I got tired of having to
        manually write out full timestamps, I was copying…
      </BlogItem>
      <BlogItem
        title="Easy JSON in Kotlin with a Type-Safe Builder DSL"
        created="Jan 8, 2022"
        link="https://alex-broadbent.medium.com/writing-a-dsl-in-kotlin-42a9029b93a6"
      >
        After learning of the type-safe builders in Kotlin in 2019, I wanted to create a
        domain-specific language (DSL) to avoid having to use the…
      </BlogItem>
      <BlogItem
        title="Levels of a Software Engineer"
        created="Aug 6, 2021"
        link="https://medium.com/interviewnoodle/levels-of-a-software-engineer-interview-c4abc78c4d"
      >
        There are different types of questions that are asked in Software Engineering interviews
        which are aimed to only be answered by more…
      </BlogItem>
    </Grid>
  </Section>
)
