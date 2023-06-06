import { v4 as uuidv4 } from 'uuid'
import generateImageName from '../utils/generateImageName'
import item1 from '../assets/images/gallery/img-01.webp'
import item2 from '../assets/images/gallery/img-02.webp'
import item3 from '../assets/images/gallery/img-03.webp'
import item4 from '../assets/images/gallery/img-04.webp'
import item5 from '../assets/images/gallery/img-05.webp'
import item6 from '../assets/images/gallery/img-06.webp'
import item7 from '../assets/images/gallery/img-07.webp'
import item8 from '../assets/images/gallery/img-08.webp'
import item9 from '../assets/images/gallery/img-09.webp'
import item10 from '../assets/images/gallery/img-10.webp'
import item11 from '../assets/images/gallery/img-11.webp'
import item12 from '../assets/images/gallery/img-12.webp'

const galleryImages = [
  {
    id: uuidv4(),
    src: item1,
    name: generateImageName('mh-barber-shop', 'coupe-de-grace')
  },
  {
    id: uuidv4(),
    src: item2,
    name: generateImageName('mh-barber-shop', 'barbe-longue')
  },
  {
    id: uuidv4(),
    src: item3,
    name: generateImageName('mh-barber-shop', 'coupe-tandeuse')
  },
  {
    id: uuidv4(),
    src: item4,
    name: generateImageName('mh-barber-shop', 'coupe-modelée')
  },
  {
    id: uuidv4(),
    src: item5,
    name: generateImageName('mh-barber-shop', 'coupe-homme-moderne')
  },
  {
    id: uuidv4(),
    src: item6,
    name: generateImageName('mh-barber-shop', 'dessin dans les cheveux')
  },
  {
    id: uuidv4(),
    src: item7,
    name: generateImageName('mh-barber-shop', 'coiffure-homme')
  },
  {
    id: uuidv4(),
    src: item8,
    name: generateImageName('mh-barber-shop', 'coloration-barbe')
  },
  {
    id: uuidv4(),
    src: item9,
    name: generateImageName('mh-barber-shop', 'coupe-homme')
  },
  {
    id: uuidv4(),
    src: item10,
    name: generateImageName('mh-barber-shop', 'coupe-tandeuse')
  },
  {
    id: uuidv4(),
    src: item11,
    name: generateImageName('mh-barber-shop', 'coupe-enfant')
  },
  {
    id: uuidv4(),
    src: item12,
    name: generateImageName('mh-barber-shop', 'rasage-tête')
  }
]

export default galleryImages
