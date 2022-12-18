export default {
  name: 'record',
  title: 'Record',
  type: 'document',
  fields: [
    {
      name: 'entryId',
      type: 'string',
      title: 'EntryID',
    },
    {
      name: 'anxiety',
      type: 'number',
      title: 'Anxiety',
    },
    {
      name: 'lackOfMotivation',
      type: 'number',
      title: 'Lack of Motivation',
    },
    {
      name: 'lackOfFocus',
      type: 'number',
      title: 'Lack of Focus',
    },
    {
      name: 'bodyPain',
      type: 'number',
      title: 'Headaches/body pain',
    },
    {
      name: 'frustration',
      type: 'number',
      title: 'Frustration',
    },
    {
      name: 'confusion',
      type: 'number',
      title: 'Confusion',
    },
    {
      name: 'overthinking',
      type: 'number',
      title: 'Overthinking',
    },
    {
      name: 'badDayFactor',
      type: 'number',
      title: 'Bad day factor',
    },
    {
      name: 'remarks',
      type: 'text',
      title: 'Remarks',
    },
  ],
}
