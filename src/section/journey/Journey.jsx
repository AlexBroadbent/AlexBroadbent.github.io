import Timeline from '@mui/lab/Timeline'
import Typography from '@mui/material/Typography'
import { Section, TextLink } from '../../component'
import { JourneyItemContract } from './JourneyItemContract'
import { JourneyItemEducation } from './JourneyItemEducation'
import { JourneyItemPerm } from './JourneyItemPerm'
import { JourneyItemProject } from './JourneyItemProject'
import { JourneyLegend } from './JourneyLegend'

export const Journey = () => (
  <Section title="Journey">
    <JourneyLegend />
    <Timeline>
      <JourneyItemPerm
        company="SAPI"
        time="Sep 2022 to Now"
        location="London"
        title="Principal Software Engineer"
        responsibilities={[
          'Joined as employee #3',
          'Reporting directly to the CTO',
          'Architecting an extensible platform while catering for changing business requirements'
        ]}
        techStack={[
          'TypeScript',
          'NodeJS',
          'React',
          'NextJS',
          'Fastify',
          'PostgreSQL',
          'REST APIs',
          'AWS',
          'Copilot',
          'Playwright',
          'Jest',
          'GitHub Actions',
          'Linear',
          'NPM',
          'Git'
        ]}
      />
      <JourneyItemContract
        client="Handmade in Harpenden"
        time="Aug 2021"
        title="Dashboard"
        techStack={[
          'NodeJS',
          'TypeScript',
          'React',
          'JavaScript',
          'Google Cloud Platform',
          'Google Firebase',
          'Google Firestore',
          'Google Cloud Functions',
          'Stripe API',
          'Square API',
          'Starling API',
          'Xero API',
          'Jest',
          'Yarn',
          'Git'
        ]}
        sx={{ mb: 5 }}
      >
        <Typography variant="body2" paragraph>
          A portal for combining all sources of income into a single dashboard. As a small business,
          HIH did not want to spend their time having to go through each source of income and adding
          them up every day to work out if they were on target for the month.
        </Typography>
        <Typography variant="body2" paragraph>
          By building a single portal, they have a one-stop place to see if they are on target for
          the month and a way to check their targets against previous months and years.
        </Typography>
      </JourneyItemContract>
      <JourneyItemPerm
        company="Tesco"
        time="Apr 2021"
        location="Welwyn Garden City, Hertfordshire"
        title="Senior Software Engineer"
        responsibilities={[
          'Joined the Quote REST API team, growing a real-time pipeline on a multi-national scale',
          'Led a 6 month project launching the Delivery Saver service (subscription model) in Ireland',
          'Managed hiring, on-boarding new engineers, work structure and allocation within the team'
        ]}
        techStack={[
          'Java',
          'Micronaut',
          'Apache Kafka',
          'RxJava',
          'Vertx',
          'Microsoft Azure',
          'AWS',
          'Groovy',
          'Spock',
          'Cucumber',
          'Couchbase',
          'Jenkins',
          'Gradle',
          'Git',
          'Jira'
        ]}
      />
      <JourneyItemProject
        time="Apr 2020"
        title="Published first blog post"
        link="https://alex-broadbent.medium.com"
        linkText="View all articles on Medium"
      >
        <Typography variant="body2" paragraph>
          As a frequent reader of blog posts, it made sense to write my own blog posts in order to
          give back to the community and share my experiences in the hopes of helping other
          engineers.
        </Typography>
        <Typography variant="body2" paragraph>
          My posts have been published from my previous workplaces and personal projects, and have
          been published in Medium publications such as{' '}
          <TextLink href="https://medium.com/interviewnoodle/levels-of-a-software-engineer-interview-c4abc78c4d">
            Interview Noodle
          </TextLink>{' '}
          and{' '}
          <TextLink href="https://blog.devgenius.io/writing-a-dsl-in-kotlin-42a9029b93a6">
            Dev Genius
          </TextLink>
          .
        </Typography>
      </JourneyItemProject>
      <JourneyItemPerm
        company="Freetrade"
        time="May 2019"
        location="London"
        title="Full-Stack Software Engineer"
        responsibilities={[
          'Expanded on both backend REST API and frontend native Android and iOS apps',
          'Delivered Freeshares, SIPPs and Freetrade Plus (subscription model) in the Growth Team'
        ]}
        techStack={[
          'TypeScript',
          'Node JS',
          'Jetbrains Webstorm',
          'Android',
          'Kotlin',
          'RxKotlin',
          'Android Studio',
          'iOS',
          'Swift',
          'RxSwift',
          'XCode',
          'Google Cloud Platform',
          'Serverless functions',
          'Firestore',
          'Circle CI',
          'Terraform',
          'Git',
          'Yarn',
          'Jira'
        ]}
      />
      <JourneyItemPerm
        company="Flux"
        time="Jan 2018"
        location="London"
        title="Backend Software Engineer"
        responsibilities={[
          'Joined as employee #6',
          'Scaled REST API and increased receipt match rate',
          'Integrated Barclays and maintained banking-specific SLAs'
        ]}
        techStack={[
          'Kotlin',
          'Dropwizard',
          'Ktor',
          'PostgreSQL',
          'Guice',
          'Kodein',
          'Github deployments',
          'Jira',
          'KoTest',
          'MockK',
          'Kubernetes',
          'Postman',
          'Amazon SQS',
          'Amazon S3',
          'Drone CI',
          'Datadog',
          'OpsGenie',
          'Agile Methodology',
          'Jetbrains IntelliJ',
          'Git',
          'Gradle'
        ]}
      />
      <JourneyItemPerm
        company="Dexda"
        time="Jul 2016"
        location="London"
        title="Backend Mid-Level Software Engineer"
        responsibilities={[
          'Joined as employee #2',
          'Architected the majority of backend core services',
          'Delivered projects '
        ]}
        techStack={[
          'Java',
          'MapR',
          'Apache HBase',
          'Apache Kafka',
          'ElasticSearch',
          'Dropwizard',
          'JUnit',
          'AssertJ',
          'Mockito',
          'Postman',
          'Prometheus',
          'Kubernetes',
          'Jenkins CI',
          'Gitlab',
          'CI/CD pipeline',
          'Agile',
          'Git',
          'Maven'
        ]}
      />
      <JourneyItemEducation
        time="Jul 2016"
        title="Finished Studies"
        school="Queen Mary, University of London"
        contentSx={{ mb: 2 }}
      >
        <Typography variant="body2" paragraph>
          Graduated with 2:1 (with honours)
        </Typography>
      </JourneyItemEducation>
      <JourneyItemPerm
        company="ServiceNow"
        time="Aug 2014-15"
        location="Egham, Surrey"
        title="Placement Year: Application Developer"
      />
      <JourneyItemEducation
        time="Sep 2011"
        title="Started Studies"
        school="Queen Mary, University of London"
        contentSx={{ mb: 0 }}
      >
        <Typography variant="body2" paragraph>
          BSc Computer Science with Industrial Placement
        </Typography>
      </JourneyItemEducation>
    </Timeline>
  </Section>
)
