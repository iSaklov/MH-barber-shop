import { fill } from '@cloudinary/url-gen/actions/resize'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import cld from '../utils/cloudinary'
import getMatchMedia from '../utils/getMatchMedia'
import generateRandomAltText from '../utils/generateRandomAltText'

const publicIDs = [
  'bl0t2uhztlv7kk0hwhls',
  'it4xeokvuph8dtgpcotq',
  'v15s8xrlztptcmcgllqp',
  'wwbuiqc8pcl3gvzvqqni',
  'qd278hqud5s9xhl49mhv',
  'bnlquem8rm77hoexznr4',
  'p3rujjwlkbre86y1tfzw',
  'i04pyeo6alxd9awzi318',
  'kx9vitdrg8wlh9brrnhd',
  'nnp5pzckwonnu05mvzvp',
  'izadnuvbkv94eaqi7i96',
  'xgwqzbyqfkoystsqxmah'
]

const getGalleryImgs = () => {
  const galleryImages = []

  function generateGalleryImgArr(width, height) {
    publicIDs.forEach((id) => {
      const img = cld.image(`mh-barbershop/gallery/${id}`)
      if (id === 'v15s8xrlztptcmcgllqp' || id === 'qd278hqud5s9xhl49mhv') {
        // in the case when auto focusing on a face does not give the expected result, you can always use standard cropping for selected images
        img.resize(fill().width(width).height(height))
      } else {
        img.resize(
          fill().width(width).height(height).gravity(focusOn(FocusOn.faces()))
        )
      }

      galleryImages.push({
        id: id,
        src: img.toURL(),
        alt: generateRandomAltText()
      })
    })
  }

  switch (getMatchMedia()) {
    case 'sm':
      generateGalleryImgArr(225, 300)
      break
    case 'md':
      generateGalleryImgArr(356, 475)
      break
    default:
      generateGalleryImgArr(488, 650)
      break
  }

  return galleryImages
}

export default getGalleryImgs
