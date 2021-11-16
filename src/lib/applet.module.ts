import { ProfileEditPage } from './profile-edit/profile-edit.page';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppletComponent, appletName } from './applet.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppletHeaderModule, AppletTabsModule, OrderListModule } from '@agunity/components';

import { OrdersModule, OrdersPage } from './orders/orders.module';
import { ProductsModule, ProductsPage } from './products/products.module';
import { ProductModule, ProductPage } from './product/product.module';
import { ProductQtyModule } from './product-qty/product-qty.module';
import { AppletImagePathToBase64PipeModule } from '@agunity/pipes';
import { SuccessPage } from './success/success.page';
import {RatingPage} from './rating/rating.page';
import { ProfilePage } from './profile/profile.page';
import { ExplorePage } from './explore/explore.page';
import { ContactProfilePage } from './contact-profile/contact-profile.page';
import {NotificationPage} from './notification/notification.page';
import { SuccessPageModule } from './success/success.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppletApiService } from '@agunity/provider';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		RouterModule.forChild([
			{
				path: '',
				component: AppletComponent,
				children: [
					{ path: 'success', component: SuccessPage },
					{ path: 'orders', component: OrdersPage },
					{ path: 'products', component: ProductsPage },
					{ path: 'product/:id', component: ProductPage },
					{ path: '', redirectTo: 'products', pathMatch: 'full' },
          {path: 'explore', component: ExplorePage},
          {path: 'notification', component: NotificationPage},
          {path: 'profileEdit', component: ProfileEditPage},
          {path: 'rating', component: RatingPage},
          {path: 'profile', component: ProfilePage},
          {path: 'contactProfile', component: ContactProfilePage},
				],
			},
		]),

		OrderListModule,
		// components:
		// AssetListModule,
		// ListBaseModule,
		// TransactionListModule,
		// AspectRatioModule,
		// ImageShellModule,
		// PinPadModule,
		// AppletIconModule,
		AppletHeaderModule,
		// AppletBarModule,
		AppletTabsModule,

		// pipes
		// AddressPipeModule,
		// FullNamePipeModule,
		// JustDatePipeModule,
		// LocalDateTimePipeModule,
		// SearchPipeModule,
		// TimeAgoPipeModule,
		// TimeDifferencePipeModule,
		AppletImagePathToBase64PipeModule,

		// DIRECTIVES
		// SortDirectiveModule

		OrdersModule,
		ProductsModule,
		SuccessPageModule,
		ProductModule,
		ProductQtyModule,
	],

	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [AppletComponent],
	exports: [AppletComponent],
})
export class AppletModule {
	constructor(private appletApiService: AppletApiService, private translateService: TranslateService) {
		console.log('AppletModule constructor: ' + appletName);
		this.registerIntents();
	}

	async registerIntents(): Promise<void> {
		// 	await this.appletApiService.store.ready;

		// for allowing other applets to call this applet for defined intents
		// 	this.appletApiService.intent.register((data: IIntentData<void>) => {
		// 		// check what kind of intent it is
		// 		if (data?.type === IntentTypes.TODO) {
		// 			return {
		// 				label: this.translateService.instant('APPLETS.' + appletName + '.TITLE'),
		// 				toRun: () => {
		// 					// what todo if this intent is fired
		// 					this.appletApiService.navigate.applet(appletName, TODO);
		// 				},
		// 				orgAppletName: appletName,
		// 			};
		// 		}
		// 	});

		// if this applet has badge
		// this.appletApiService.intent.registerBadge(
		// 	appletName,
		// 	// TODO: how to calculate the budge number
		// );
	}

}
