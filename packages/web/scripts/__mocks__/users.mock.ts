// @ts-ignore

const schema = {
  type: 'array',
  uniqueItems: true,
  minItems: 10,
  maxItems: 40,
  items: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        minimum: 1,
        maximum: 500,
        unique: true,
      },
      avatar: {
        faker: 'internet.avatar',
      },
      first_name: {
        faker: 'name.firstName',
      },
      last_name: {
        faker: 'name.lastName',
      },
      is_valid: {
        faker: 'random.boolean',
      },
      email: {
        type: 'string',
        faker: 'internet.email',
      },
      number: {
        faker: 'random.number',
      },
      expeditionDate: {
        faker: 'date.past',
      },
      typeIdentification: {
        enum: ['CC', 'TI'],
      },
    },
    required: [
      'id',
      'avatar',
      'first_name',
      'last_name',
      'is_valid',
      'email',
      'number',
      'expeditionDate',
      'typeIdentification',
    ],
  },
}

module.exports = schema
