import { v4 as uuidv4 } from 'uuid'
import item1 from '../assets/images/gallery-background/img-01.webp'
import item2 from '../assets/images/gallery-background/img-02.webp'
import item3 from '../assets/images/gallery-background/img-03.webp'

const backgroundImages = [
  { id: uuidv4(), src: item1 },
  { id: uuidv4(), src: item2 },
  { id: uuidv4(), src: item3 }
]

export default backgroundImages
