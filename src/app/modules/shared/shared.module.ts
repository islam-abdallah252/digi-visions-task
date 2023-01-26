import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

const MaterialModule = [
  MatDividerModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
];

@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [CommonModule, ...MaterialModule],
  exports: [...MaterialModule, DeleteDialogComponent],
})
export class SharedModule {}
