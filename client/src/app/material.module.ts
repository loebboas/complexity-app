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
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
	imports: [MatButtonModule, MatDatepickerModule, MatListModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule],
	exports: [MatButtonModule, MatDatepickerModule, MatListModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule]
	})

export class MaterialModule {}
