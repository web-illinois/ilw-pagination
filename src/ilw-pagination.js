import { LitElement, html } from 'lit';
import styles from './ilw-pagination.styles';
import './ilw-pagination.css';

class Pagination extends LitElement {

    static get properties() {
        return {
            page: { type: Number, attribute: true, default: 1 },
            pages: { type: Number, attribute: true, default: 1 },
            parameter: { type: String, attribute: true, default: 'page' },
            label: { type: String, attribute: true, default: 'Page List' },
            hidepagecount: { type: Boolean, attribute: true, default: false },
            zerostart: { type: Boolean, attribute: true, default: false }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.page = 1;
        this.pages = 1;
        this.parameter = 'page';
        this.label = 'Page List';
        this.zerostart = false;
        this.hidepagecount = false;
        this.url = location.href;
        this.offset = 0;
    }

    getPageUrl(pageNumber) {
        const baseUrl = new URL(this.url);
        if (this.parameter !== 'page') {
            baseUrl.searchParams.set('page', pageNumber);
        }
        baseUrl.searchParams.set(this.parameter, pageNumber);
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
        <nav aria-label="${this.label}">
            <ul>
                ${lines}
            </ul>
        </nav>
        `;
    }
}

customElements.define('ilw-pagination', Pagination);