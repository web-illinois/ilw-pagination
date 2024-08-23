# ilw-pagination

Links: **[ilw-pagination in Builder](https://builder3.toolkit.illinois.edu/component/ilw-pagination/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This is a navigation component for paged content. This contains First, Previous, a numbered set of pages with the current page highlighted, Next, and Last. 

If there are more than 8 pages, it will automatically fill in an ellipsis to mark a gap in pages. 

Each item (First, Previous, Next, Last, and numbered pages) will link to the current page with a *page* parameter. You can change this parameter by using the `parameter` attribute. A page *https://illinois.edu/list/* with a pagination web component creates links like *https://illinois.edu/list?page=2*, *https://illinois.edu/list?page=3*, *https://illinois.edu/list?page=4*, etc. This component will respect other querystring items and not add a dbout *?* in the querystring. 

The `ilw-pagination` component has the following attributes:
* `label`: the label used for this page counter. Defaults to *Page List*. 
* `pages`: integer only, the total number of pages in the list. This is required. Note that if this is zero-based, you must count 0 as a page (so fifteen pages is 0-14).
* `page`: integer only, the current page. Defaults to *1*.
* `parameter`: the querystring parameter used to build the link, defaults to *page*. Note that if you change this, it will also change the `page` parameter appropriately. 
* `hidepagecount`: Boolean value, hide the *page x of y* value. 
* `zerostart`: Boolean value, determine if the page counting starts at 0 (this is a Drupal default). Defaults to false. 

## Code Examples

```html
<ilw-pagination label="Top Page List" pages="5" page="3"></ilw-pagination>
```

## Accessibility Notes and Use

This will wrap the ordered list in a `nav` section with the correct `aria-label`. If you have multiple pagination (like a top and bottom), be sure to use the `label` attribute to differentiate the different pagination controls. This will assign the current page with the `aria-current` attribute. This also includes a "page x of y" for easier navigation.

When handling pages, please allow the option to change the number of items per page directly. 

This is requiring a distinct URL as opposed to JavaScript or inline loading because this encourages a way to bookmark a specific page. 

The target for each page number is at least 24x24 pixels. The page numbers are fixed on the page so the buttons don't jump too much from page to page. 

## External References

* https://www.w3.org/WAI/WCAG21/Techniques/html/H99
* https://www.nngroup.com/articles/alternatives-pagination-listing-pages/
* https://www.nngroup.com/articles/item-list-view-all/
* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current
