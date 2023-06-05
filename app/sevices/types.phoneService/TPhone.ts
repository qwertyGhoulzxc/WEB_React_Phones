export interface TPhone {
    _id:string
    id: number
    company: string
    price: Price
    model: string
    color: Color
    possibleColors: string[]
    article: number
    Isnew: boolean
    equipment: string[]
    display: Display
    cpu: Cpu
    camera: Camera
    memory: Memory
    system: System
    simCard: SimCard
    casE: CasE
    other: Other
    inStock: number
    buyedCount: number
    accessories?: any[]
  }

  export interface TShortPhone {
    id: number
    price: Price
    color: Color
    memory: Memory
    _id: string
    model: string
  }

  
  interface Price {
    price: number
    discountPrice?: number
  }
  
  interface Color {
    colorEn: string
    colorRu: string
    img: string[]
  }
  
interface Display {
    typeDisplay: string
    screen: string
    screenSizePixels: string
    PPI: string
    colors: string
    sensorDisplay: string
    multiTouch: string
    screenProtect: string
    displayFeatures: string
    oleophobicCoating: string
  }
  
interface Cpu {
    cpuPhone: string
    description: string
  }
  
interface Camera {
    cameraPhone: string
    opticalZoom: string
    stabilizationImg: string
    autoFocus: string
    light: string
    record: string
    recordQuality: string
    recordFps: number
    videoStabilization: string
    frontCamera: string
  }
  
interface Memory {
    memory: string[]
    possibleMemory: string[]
    ram: string
  }
  
interface System {
    os: string
    navigation: string
  }
  
interface SimCard {
    typeSimCard: string
    eSim: string
    numSim: number
  }
  
interface CasE {
    typeOfCase: string
    height: number
    width: number
    depth: number
    weight: number
    caseMaterial: string
    waterProtection: string
    typeOfWaterProtection: string
  }
  
interface Other {
    guarantee: string
    manufacturer: string
    factory: string
  }