import Timeline from '@mui/lab/Timeline'
import Typography from '@mui/material/Typography'
import { Section, TextLink } from '../../component'
import { JourneyItemContract } from './JourneyItemContract'
import { JourneyItemEducation } from './JourneyItemEducation'
import { JourneyItemPerm } from './JourneyItemPerm'
import { JourneyItemProject } from './JourneyItemProject'
import { JourneyLegend } from './JourneyLegend'

export function Journey() {
  return (
    <Section title="Journey">
      <JourneyLegend />
      <Timeline>
        <JourneyItemPerm
          company="SAPI"
          time="Sep 2022"
          location="London"
          title="Principal Software Engineer"
          responsibilities={[
            'Joined as second technical employee, working full stack across frontend and backend services',
            'Architecting out the platform',
            'Delivering integrations to new clients'
          ]}
          techStack={[
            'TypeScript',
            'NodeJS',
            'Fastify',
            'Postgres',
            'REST APIs',
            'SQL',
            'AWS',
            'Copilot',
            'Jest',
            'GitHub Actions',
            'NPM',
            'Git',
            'Linear'
          ]}
          website="https://www.sapi.com"
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
            'Jest',
            'Yarn',
            'Git'
          ]}
        >
          <Typography variant="body2" paragraph>
            A portal for combining all sources of income into a single dashboard. As a small
            business, HIH did not want to spend their time having to go through each source of
            income and adding them up every day to work out if they were on target for the month.
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
            'Currently in the Quote HTTP API team, growing a real-time pipeline on a multi-national scale.',
            'Led the launch of Delivery Saver Service in Ireland which involved architecting multiple solutions.',
            'Regularly involved in hiring, on-boarding new engineers, work structure and allocation.'
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
          website="https://www.tesco.com"
        />
        <JourneyItemProject
          time="Apr 2020"
          title="Started Blogging"
          link="https://alex-broadbent.medium.com"
          linkText="View all articles on Medium"
        >
          <Typography variant="body2" paragraph>
            As a frequent reader of blog posts in order to discover new language features or to
            solve issues that I have in my career, it made sense to write my own blog posts in order
            to give back to the community and share my experiences in the hopes of helping future
            developers.
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
          title="Full-Stack Mid-Level Software Engineer"
          responsibilities={[
            'Worked full-stack across a TypeScript server with native Android and iOS apps.',
            'Delivered features like Freeshares, SIPPs, OpenBanking deposits and Subscriptions in the Growth Team.'
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
          website="https://freetrade.io"
        />
        <JourneyItemPerm
          company="Flux"
          time="Jan 2018"
          location="London"
          title="Backend Mid-Level Software Engineer"
          responsibilities={[
            'Having joined as the third developer, my focus was on scaling with demand, maintaining uptime and an accurate receipt match rate.',
            'Worked on integrating and maintaining bank and retail partners, such as Starling, Monzo, Barclays, KFC and Just Eat.'
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
          website="https://tryflux.com"
        />
        <JourneyItemPerm
          company="Dexda"
          time="Jul 2016"
          location="London"
          title="Backend Mid-Level Software Engineer"
          responsibilities={[
            'Contributed towards defining the core architecture using machine learning',
            'First exposure to being responsible for designing, implementing and improving the backend REST APIs'
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
          website="https://dexda.io"
        />
        <JourneyItemEducation
          time="Jul 2016"
          title="Finished Studies"
          school="Queen Mary, University of London"
          sx={{ pb: 2 }}
        >
          <Typography variant="body2" paragraph>
            Graduated with 2:1 (with honours)
          </Typography>
        </JourneyItemEducation>
        <JourneyItemPerm
          company="ServiceNow"
          time="Aug 2014 - Aug 2015"
          location="Egham, Surrey"
          title="Placement Year: Application Developer"
          website="https://www.servicenow.com"
        />
        <JourneyItemEducation
          time="Sep 2011"
          title="Started Studies"
          school="Queen Mary, University of London"
        >
          <Typography variant="body2" paragraph>
            BSc Computer Science with Industrial Placement
          </Typography>
        </JourneyItemEducation>
      </Timeline>
    </Section>
  )
}
