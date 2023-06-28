interface ITournament {
    id: string,
    name: string,
    racers: IRacer[],
    status: string,
    game?: IRacerGame[]
}

interface IRacer {
    id: string,
    model: ICarModel,
    money: number,
}

interface ICar {
    id: string,
    model_id: string,
    color: string,
    engineLevel: number,
    turboLevel: number,
    brakeLevel: number
}

interface ICarModel {
    id: string,
    baseMaxSpeed: number,
    baseRacing: number,
    baseStability: number,
    baseRecoverySpeed: number,
    baseStartingDelay: number,
}

interface IRacerGame {
    id: string,
    racer_id: string,
    startDelay: number,
    startDelayProbability: number,
    racing: number,
    maxSpeed: number,
    timeTillBrake: number,
    brakeProbability: number,
    recoveryTime: number,
    position?: number,
    extraMoney?: number,
    resultTime?: number
}

