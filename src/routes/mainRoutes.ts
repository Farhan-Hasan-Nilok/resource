import { Router, Request, Response } from "express";
import { AppDataSource } from "../../database/DataProvider";
import Resource from "../../database/entities/resources";
const router = Router();

router.get("/resources", async (req: Request, res: Response) => {
  const allResources = await AppDataSource.getRepository(Resource).find();
  res.json(allResources);
});

router.get("/resources/category", async (req: Request, res: Response) => {
  const category = req.query.category;
  const allData = await AppDataSource.getRepository(Resource).find({where: {topic: category as string}});
  res.send(allData)
});


router.post("/create-resources", async(req: Request, res: Response) => {
  const {topic, link, description} = req.body;
  const createResources = new Resource();
  createResources.description = description;
  createResources.topic = topic;
  createResources.link = link
  await AppDataSource.manager.save(createResources);
  // console.log(newResource)
  res.send(true)
})

router.patch('/edit-resources/:id', async(req: Request, res: Response) => {
  const {id} = req.params
  const {topic, link, description,} = req.body;
  const a = await AppDataSource.createQueryBuilder().update(Resource).set({topic: topic, link: link, description: description}).where({id: id});
  console.log(a)
  // res.status(200).send(true)
})
// router.post("/create-resources", async (req: Request, res: Response) => {
//   const createResources = new Resource();
//   createResources.description = "This is a small cheat sheet for git";
//   createResources.topic = "Git";
//   createResources.link = "https://github.com/bdthemescom/git-flow";
//   // const allResources = await AppDataSource.manager.save(createResources)
//   // res.json(allResources)
// });

export default router;
