import { AppDataSource } from './../database/DataProvider';
import express, { Request, Response } from "express";
import Resource from '../database/entities/resources'
import cors from './lib/cors';

const port = process.env.PORT || 3000;
// const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());


AppDataSource.initialize().then(() =>
  console.log("Postgres connected successfully")
).catch((err: Error) => console.error('Error postgres initialization', err));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.get('/resources', async (req: Request, res: Response) => {
  const allResources = await AppDataSource.getRepository(Resource).find()
  res.json(allResources)
})
app.get('/create-resources', async (req: Request, res: Response) => {
  const createResources = new Resource();
  createResources.description = 'This is a small cheat sheet for git';
  createResources.for = 'Git';
  createResources.link = 'https://github.com/bdthemescom/git-flow';
  // const allResources = await AppDataSource.manager.save(createResources)
  // res.json(allResources)
});
app.get('/resources/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const _id = parseInt(id)
  // const allResources = await AppDataSource.getRepository(Resource).findOneBy({id: _id})
  const allResources = await AppDataSource.manager.findOneBy(Resource, { id: _id })
  res.status(200).send(allResources)
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
