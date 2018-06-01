import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatNativeDateModule  } from '@angular/material';
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
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
	imports: [CommonModule, MatNativeDateModule, MatSlideToggleModule, MatButtonModule, MatTooltipModule, MatSnackBarModule, MatTableModule, MatStepperModule, MatIconModule, MatGridListModule, MatDialogModule, MatChipsModule, MatDatepickerModule, MatListModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule],
	exports: [MatButtonModule, MatSlideToggleModule, MatSnackBarModule, MatTooltipModule, MatTableModule, MatStepperModule, MatIconModule, MatGridListModule, MatDialogModule, MatChipsModule, MatDatepickerModule, MatListModule, MatMenuModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatTabsModule, MatSidenavModule]
	})

export class MaterialModule {}
