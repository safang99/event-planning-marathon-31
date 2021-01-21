const Model = require("./Model")

class Invitation extends Model {
  static get tableName() {
    return "invitations"
  }

  static get relationMappings() {
    const Guest = require("./Guest.js")
    const Event = require("./Event.js")

    return {
      event: {
        relation: Model.BelongsToOneRelation,
        modelClass: Event,
        join: {
          from: "invitations.eventId",
          to: "events.id"
        }
      },
      guest: {
        relation: Model.BelongsToOneRelation,
        modelClass: Guest,
        join: {
          from: "invitations.guestId",
          to: "guests.id"
        }
      }
    }
  }
}

module.exports = Invitation
