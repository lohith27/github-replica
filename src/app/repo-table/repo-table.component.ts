import { Component, OnInit, Input, Output ,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.css']
})
export class RepoTableComponent implements OnInit, OnChanges {
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 3;
  @Input() maxPages = 10;
  pager: any = {};

  constructor() {
    console.log(this.items);
   }

  ngOnInit(): void {
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }
  setPage(page: number) {
    
    this.pager = this.paginate(this.items.length, page, this.pageSize, this.maxPages);

    
    var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    
    this.changePage.emit(pageOfItems);
  }
  paginate(totalItems, currentPage, pageSize, maxPages) {
    if (currentPage === void 0) { currentPage = 1; }
    if (pageSize === void 0) { pageSize = 3; }
    if (maxPages === void 0) { maxPages = 3; }
    
    var totalPages = Math.ceil(totalItems / pageSize);
    
    if (currentPage < 1) {
        currentPage = 1;
    }
    else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    var startPage, endPage;
    if (totalPages <= maxPages) {
        
        startPage = 1;
        endPage = totalPages;
    }
    else {
        
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
} 

}
