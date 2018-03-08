import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
	imports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule],
	exports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule]
	})

export class MaterialModule {}
