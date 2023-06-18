import { v4 as uuidv4 } from 'uuid'
import item01 from '../assets/images/gallery-background/bg-01.webp'
import item02 from '../assets/images/gallery-background/bg-02.webp'
import item03 from '../assets/images/gallery-background/bg-03.webp'
import item04 from '../assets/images/gallery-background/bg-04.webp'
import item05 from '../assets/images/gallery-background/bg-05.webp'
import item06 from '../assets/images/gallery-background/bg-06.webp'
import item07 from '../assets/images/gallery-background/bg-07.webp'

const backgroundImages = [
  { id: uuidv4(), src: item01 },
  { id: uuidv4(), src: item02 },
  { id: uuidv4(), src: item03 },
  { id: uuidv4(), src: item04 },
  { id: uuidv4(), src: item05 },
  { id: uuidv4(), src: item06 },
  { id: uuidv4(), src: item07 }
]

export default backgroundImages
