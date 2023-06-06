import { v4 as uuidv4 } from 'uuid'

const generateImageName = (brand, style) => {
  const imageName = `${brand}-${style}`
  const uniqueId = uuidv4().substring(0, 8)

  return `${imageName}-${uniqueId}`
}
export default generateImageName
