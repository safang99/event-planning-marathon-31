class CategorySerializer {
  static getSummary(category) {
    const allowedAttributes = ["id", "name"]

    let serializedCategory = {}
    for (const attribute of allowedAttributes) {
      serializedCategory[attribute] = category[attribute]
    }
    return serializedCategory
  }
}

export default CategorySerializer
