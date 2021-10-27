import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuFaInputComponent } from "./au-fa-input/au-fa-input.component";
import { InputRefDirective } from "./common/input-ref.directive";

@NgModule({
    declarations: [
        AuFaInputComponent, 
        InputRefDirective
    ],
    exports: [
        AuFaInputComponent, 
        InputRefDirective
    ],
    imports: [
        CommonModule
    ],
})
export class AuInputModule {}