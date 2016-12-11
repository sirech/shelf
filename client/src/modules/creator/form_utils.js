export const modelName = (entity, field) => {
  const model = `new-${entity}`
  return field ? model + `.${field}` : model
}
export const formName = (entity) => `redux-${entity}-form`
