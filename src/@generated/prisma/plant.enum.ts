import { registerEnumType } from '@nestjs/graphql';

export enum PlantEnum {
    piuva = "piuva",
    almofadinha = "almofadinha",
    mrCarrot = "mrCarrot",
    nunos = "nunos",
    losNachos = "losNachos",
    miau = "miau",
    esconderijoDoToto = "esconderijoDoToto",
    caioCoqueiro = "caioCoqueiro",
    cartolesco = "cartolesco"
}


registerEnumType(PlantEnum, { name: 'PlantEnum', description: undefined })
