import { fill } from '@cloudinary/url-gen/actions/resize'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import cld from '../utils/cloudinary'
import getMatchMedia from '../utils/getMatchMedia'
import generateRandomAltText from '../utils/generateRandomAltText'
// import item1 from '../assets/images/gallery/img-01.webp'
// import item2 from '../assets/images/gallery/img-02.webp'
// import item3 from '../assets/images/gallery/img-03.webp'
// import item4 from '../assets/images/gallery/img-04.webp'
// import item5 from '../assets/images/gallery/img-05.webp'
// import item6 from '../assets/images/gallery/img-06.webp'
// import item7 from '../assets/images/gallery/img-07.webp'
// import item8 from '../assets/images/gallery/img-08.webp'
// import item9 from '../assets/images/gallery/img-09.webp'
// import item10 from '../assets/images/gallery/img-10.webp'
// import item11 from '../assets/images/gallery/img-11.webp'
// import item12 from '../assets/images/gallery/img-12.webp'

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

      img.resize(
        fill().width(width).height(height).gravity(focusOn(FocusOn.faces()))
      )

      galleryImages.push({
        id: id,
        src: img.toURL(),
        alt: generateRandomAltText()
      })
    })
  }

  switch (getMatchMedia()) {
    case 'sm':
      generateGalleryImgArr(220, 300)
      break
    case 'md':
      generateGalleryImgArr(250, 330)
      break
    default:
      generateGalleryImgArr(270, 350)
      break
  }

  return galleryImages
}

export default getGalleryImgs
