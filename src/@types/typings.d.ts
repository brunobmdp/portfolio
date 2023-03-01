interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  assets: {
    _ref: string
    _type: 'reference'
  }
  crop?: {
    _type: 'sanity.imageCrop'
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot?: {
    _type: 'sanity.imageHotspot'
    height: number
    width: number
    x: number
    y: number
  }
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInformation: string
  email: string
  heroImage: Image
  name: string
  phoneNumber: string
  profilePic: Image
  role: string
}

export interface Skill extends SanityBody {
  _type: 'skill'
  title: string
  progress: number
  image: Image
}

export interface Project extends SanityBody {
  _type: 'project'
  title: string
  image: Image
  linkToBuild?: string
  linkToCode?: string
  summary: string
  technologies: Skill[]
}
