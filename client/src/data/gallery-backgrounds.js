import { fill } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'
import cld from '../utils/cloudinary'
import getMatchMedia from '../utils/getMatchMedia'

const publicIDs = [
  'vr6pum5o3kfmqktukocx',
  'ujsjml26amysbctvmp7n',
  'ubh0xkiyle32udqgo1ev',
  'rkyuchyphi5js74tw9yb',
  'tzaygwv0m1wliydifcfa',
  'w6yinjhwholvozti2rbf',
  'vkkqnyejysjk9gcvjgzf'
]

const getBgImgArr = () => {
  const backgroundImages = []

  function generateBgImgArr(width) {
    publicIDs.forEach((id) => {
      const img = cld.image(`mh-barbershop/gallery-background/${id}`)
      img.resize(fill().width(width).gravity(autoGravity()))
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
