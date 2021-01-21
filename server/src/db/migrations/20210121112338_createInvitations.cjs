/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("invitations", (table) => {
    table.bigIncrements("id")
    table.bigInteger("eventId").index().notNullable().unsigned().references("events.id")
    table.bigInteger("guestId").index().notNullable().unsigned().references("guests.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("invitations")
}
