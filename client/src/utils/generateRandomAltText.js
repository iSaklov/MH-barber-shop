const trendyHairWords = [
  'Barbu',
  'Épuré',
  'Classique',
  'Moderne',
  'Tendance',
  'Audacieux',
  'Séduisant',
  'Glamour',
  'Sophistiqué',
  'Sauvage',
  'Courte',
  'Dégradée',
  'Undercut',
  'Pompadour',
  'Rasée',
  'Faux Hawk',
  'Brosse',
  'Spiky',
  'Bébé',
  'Ado',
  'Cool'
]

const generateRandomAltText = () => {
  const randomIndex = Math.floor(Math.random() * trendyHairWords.length)
  const trendyWord = trendyHairWords[randomIndex]
  const randomSuffix = Math.floor(Math.random() * 1000)
  const keyword = randomSuffix < 500 ? 'coiffure' : 'barber shop'

  return `${trendyWord} ${keyword} ${randomSuffix}`
}

export default generateRandomAltText
