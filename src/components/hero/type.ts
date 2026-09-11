export type HeroStageProps = { alt: string }

export type PidBenchInstrument = {
    tag: string
    num: string
    x: number
    y: number
    panel?: boolean
}

export type PidBenchReading = {
    x: number
    y: number
    text: string
}

export type PidBenchEquipment = {
    x: number
    y: number
    text: string
    anchor?: "start" | "middle" | "end"
}
