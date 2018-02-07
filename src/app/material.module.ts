import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule } from '@angular/material';
import { MatSelectModule, MatSlideToggleModule, MatFormFieldModule, MatCardModule  } from '@angular/material';
import { MatGridListModule, MatDividerModule, MatListModule, MatIconModule, MatTableModule, MatRadioModule  } from '@angular/material';
import {MatInputModule, MatNativeDateModule ,  MatTooltipModule} from '@angular/material';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [MatTooltipModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatToolbarModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule, MatFormFieldModule, MatCardModule, MatGridListModule, MatDividerModule, MatListModule, MatIconModule, MatTableModule, MatRadioModule],
  // tslint:disable-next-line:max-line-length
  exports: [MatTooltipModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatToolbarModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule, MatSelectModule, MatSlideToggleModule, MatFormFieldModule, MatCardModule, MatGridListModule, MatDividerModule, MatListModule, MatIconModule, MatTableModule, MatRadioModule],
})
export class MaterialModule {
}
