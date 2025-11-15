import { css } from 'lit';

export default css`
nav {
  background: var(--ilw-color--background);
  padding: 1px 0;
}
nav.page ul {
  margin: 4px var(--ilw-margin--side, max(1.875rem, calc(50cqw - 37.5rem))) 4px;
}
ul {
  padding: 0;
  margin: 4px 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
li {
  padding: 0;
  list-style: none;
}
li.current, li.ellipsis, li.previous span, li.first span, li.next span, li.last span, li.pagecount span, a {
  display: flex;
  min-width: 24px;
  justify-content: center;
  padding: 12px 18px;
  font-family: var(--il-font-sans);
  font-size: 1.1875rem;
  background: var(--ilw-color--background);
  color: var(--ilw-color--control-text);
  border-color: var(--ilw-color--control-text);
  outline: solid thin var(--ilw-color--control-text);
}
li.current {
  background-color: var(--ilw-color--control-text);
  color: var(--ilw-color--control);
}
li.ellipsis, li.previous span, li.first span, li.next span, li.last span, li.pagecount span {
  outline: none;
}
li.ellipsis {
  color: var(--ilw-color--control-text);
}
li.pagecount span {
  margin-left: 20px;
}
a {
  font-weight: 500;
  text-decoration: none;
  color: var(--ilw-color--control-text);
  background: var(--ilw-color--control);
}
a:hover {
  color: var(--ilw-color--control);
  background: var(--ilw-color--control-text);
  text-decoration: underline;
}
a:focus {
  background: var(--ilw-color--focus--background);
  color: var(--ilw-color--focus--text);
  border-color: var(--ilw-color--focus--outline);
  text-decoration: underline;
}
`;