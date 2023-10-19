import { g, auth, config } from "@grafbase/sdk";

const user = g.model('user', {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list(),
})

const Project = g.model('project', {
  title: g.string().length({min: 3}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl:g.url(),
  githubUrl: g.url(),
  category: g.string(),
  createdBy: g.relation(() => User),
})



export default config({
  schema: g,
});
