export type PidBenchInstrument = {
    tag: string
    num: string
    x: number
    y: number
    panel?: boolean
}

export type PidReadingKey =
    | "heaterOut" | "supplyPressure" | "downstreamPressure" | "valveOpening"
    | "fuelFlow" | "speed" | "vibration" | "exhaustTemp"

export type PidBenchReading = {
    key: PidReadingKey
    x: number
    y: number
}

export type PidBenchEquipment = {
    x: number
    y: number
    text: string
    anchor?: "start" | "middle" | "end"
}

export type PidBenchProps = { readings: Record<PidReadingKey, string> }
