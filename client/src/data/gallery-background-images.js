import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import getMatchMedia from '../utils/getMatchMedia'
// import src01 from '../assets/images/gallery-background/bg-01.webp'
// import src02 from '../assets/images/gallery-background/bg-02.webp'
// import src03 from '../assets/images/gallery-background/bg-03.webp'
// import src04 from '../assets/images/gallery-background/bg-04.webp'
// import src05 from '../assets/images/gallery-background/bg-05.webp'
// import src06 from '../assets/images/gallery-background/bg-06.webp'
// import src07 from '../assets/images/gallery-background/bg-07.webp'

const publicIDs = [
  'vr6pum5o3kfmqktukocx',
  'ujsjml26amysbctvmp7n',
  'ubh0xkiyle32udqgo1ev',
  'vkkqnyejysjk9gcvjgzf',
  'rkyuchyphi5js74tw9yb',
  'tzaygwv0m1wliydifcfa',
  'w6yinjhwholvozti2rbf'
]

const getBgImgArr = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dmodiqndy'
    }
  })

  const backgroundImages = []

  function generateBgImgArr(width) {
    publicIDs.forEach((id) => {
      const img = cld.image(`mh-barbershop/gallery-background/${id}`)
      img.resize(scale().width(width)).quality('auto')
      backgroundImages.push({ id: id, src: img.toURL() })
    })
  }

  switch (getMatchMedia()) {
    case 'sm':
      generateBgImgArr(768)
      break
    case 'md':
      generateBgImgArr(992)
      break
    default:
      generateBgImgArr(1400)
      break
  }

  return backgroundImages
}

export default getBgImgArr
