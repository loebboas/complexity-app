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
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	imports: [MatButtonModule, MatTableModule, MatIconModule, MatGridListModule, MatDialogModule, MatChipsModule, MatDatepickerModule, MatListModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule],
	exports: [MatButtonModule, MatTableModule, MatIconModule, MatGridListModule, MatDialogModule, MatChipsModule, MatDatepickerModule, MatListModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule]
	})

export class MaterialModule {}
