import express from "express"

import { Category } from "../../../models/index.js"

import categoryEventsRouter from "./categoryEventsRouter.js"
import CategorySerializer from "../../../serializers/CategorySerializer.js"

const categoriesRouter = new express.Router()

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.query()
    const serializedCategories = categories.map((category) =>
      CategorySerializer.getSummary(category)
    )
    return res.status(200).json({ categories: serializedCategories })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

categoriesRouter.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const category = await Category.query().findById(id)
    category.events = await category.$relatedQuery("events")
    return res.status(200).json({ category })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

categoriesRouter.use("/:categoryId/events", categoryEventsRouter)

export default categoriesRouter
