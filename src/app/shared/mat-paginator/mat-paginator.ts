import { MatPaginatorIntl } from '@angular/material/paginator';

export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = '# Items';  
  override nextPageLabel = 'Siguiente';
  override previousPageLabel = 'Anterior';
}