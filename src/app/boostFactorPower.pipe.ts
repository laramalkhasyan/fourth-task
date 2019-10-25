import { PipeTransform,Pipe } from '@angular/core';


@Pipe({
    name:"boostfactor"
})
export class BoostFactorPowerPipe implements PipeTransform{
    transform(power:number,factor:number): number{
        return power**factor
    }
}