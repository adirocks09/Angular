import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from "./iemployee"; //single dot in the path means parent folder (here : employee)
                                         //double dot means grandparent folder (here : app)
                                         //triple dot means great grandparent folder (here : src)

@Pipe({
    name: 'mycustom'
})
export class MycustomPipe implements PipeTransform {

    transform(value: string, gender: string, salary: number): string {
        let transformedName = "";
        if (gender.toLowerCase() == ("female")) {
            transformedName = transformedName + "Miss." + value;
        }
        else {
            transformedName = transformedName + "Mr." + value;
        }

        if (salary >= 5000) {
            transformedName = transformedName + "(Experienced)";
        }
        else {
            transformedName = transformedName + "(Fresher)";
        }
        
        return transformedName
    }
}
