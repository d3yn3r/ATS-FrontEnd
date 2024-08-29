import { MatPaginatorIntl } from '@angular/material/paginator';

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = '';  
  override nextPageLabel = 'Siguiente';
  override previousPageLabel = 'Anterior';
}