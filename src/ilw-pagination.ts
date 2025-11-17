import { LitElement, html, unsafeCSS } from 'lit';
import styles from './ilw-pagination.styles';

import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-pagination')
export default class Pagination extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }
    
    @property({type: Number}) 
    page = 1;

    @property({type: Number}) 
    pages = 1;

    @property({type: String}) 
    parameter = "page";

    @property({type: String}) 
    label = "Page List";

    @property({type: Boolean}) 
    hidepagecount = false;

    @property({type: Boolean}) 
    zerostart = false;

    @property({type: String}) 
    url = "";

    @property({type: String}) 
    width: string = "";

    @property({type: String}) 
    padding: string = "";

    @property({type: Number}) 
    offset = 0;

    constructor() {
        super();
        this.page = 1;
        this.pages = 1;
        this.parameter = 'page';
        this.label = 'Page List';
        this.zerostart = false;
        this.hidepagecount = false;
        this.width = '';
        this.padding = '';
        this.url = location.href;
        this.offset = 0;
    }

    get paddingStyle() {
      return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
    }

    get outerWidth() {
      return this.width == 'full' || this.width == 'auto' ? 'fixed' : this.width == 'page' ? 'page' : '';
    }

    get innerWidth() {
      return this.width == 'auto' ? 'fixed' : '';
    }
    getPageUrl(pageNumber: Number) {
        const baseUrl = new URL(this.url);
        if (this.parameter !== 'page') {
            baseUrl.searchParams.set('page', pageNumber.toString());
        }
        baseUrl.searchParams.set(this.parameter, pageNumber.toString());
        return baseUrl.href;
    }

    getStartPage() {
        if (this.pages <= 6 || this.page < 3) {
            return 1 + this.offset;
        } else if (this.page > (this.pages - 3)) {
            return this.pages - 4;
        } else {
            return this.page - 2;
        }
    }

    getEndPage() {
        if (this.pages <= 6 || this.page > (this.pages - 3)) {
            return this.pages;
        } else if (this.page < 3) {
            return 5 + this.offset;
        } else {
            return this.page + 2;
        }
    }

    render() {
        this.offset = this.zerostart ? -1 : 0;
        let firstPage = 1 + this.offset;
        let lines = [];
        if (this.page > firstPage) {
            lines.push(html`<li class="first"><a href="${this.getPageUrl(firstPage)}" aria-label="First page">First</a></li>`);
            lines.push(html`<li class="previous"><a href="${this.getPageUrl(this.page - 1)}" aria-label="Previous page">Previous</a></li>`);
        } else {
            lines.push(html`<li class="first"><span>First</span></li>`);
            lines.push(html`<li class="previous"><span>Previous</span></li>`);
        }
        if (this.getStartPage() > firstPage) {
            lines.push(html`<li class="ellipsis"><span>&hellip;</span></li>`);
        }
        for (let i = this.getStartPage(); i <= this.getEndPage(); i++) {
            if (i === this.page) {
                lines.push(html`<li class="current" aria-current="page"><span>${i - this.offset}</span></li>`);
            } else {
                lines.push(html`<li><a href="${this.getPageUrl(i)}" aria-label="Page ${i - this.offset}">${i - this.offset}</a></li>`);
            }
        }
        if (this.getEndPage() < this.pages) {
            lines.push(html`<li class="ellipsis"><span>&hellip;</span></li>`);
        }
        if (this.page < this.pages) {
            lines.push(html`<li class="next"><a href="${this.getPageUrl(this.page + 1)}" aria-label="Next page">Next</a></li>`);
            lines.push(html`<li class="last"><a href="${this.getPageUrl(this.pages)}" aria-label="Last page">Last</a></li>`);
        } else {
            lines.push(html`<li class="next"><span>Next</span></li>`);
            lines.push(html`<li class="last"><span>Last</span></li>`);
        }
        if (!this.hidepagecount) {
            lines.push(html`<li class="pagecount"><span>Page ${this.page - this.offset} of ${this.pages - this.offset}</span></li>`);
        }

        return html`
        <nav aria-label="${this.label}" class="${this.outerWidth}" style="${this.paddingStyle}">
            <ul class="${this.innerWidth}">
                ${lines}
            </ul>
        </nav>
        `;
    }
}

declare global {
interface HTMLElementTagNameMap {
    "ilw-pagination": Pagination;
  }
}