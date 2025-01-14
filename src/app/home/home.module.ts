import { NgModule } from "@angular/core";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/core/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        PromocoesComponent,
        DepoimentosComponent,
    ],
    imports:  [
        CommonModule,
        MaterialModule,
        SharedModule,
    ],
    exports: [
        HomeComponent,
        PromocoesComponent,
        DepoimentosComponent
    ]
})
export class HomeModule {
}