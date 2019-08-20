import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [RatingComponent],
	imports: [
		IonicModule
	],
	exports: [RatingComponent]
})
export class ComponentsModule {}
