import { css } from 'lit';

export default css`
ul {
  padding: 0;
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
  outline: solid thin var(--il-blue);
  font-family: var(--il-font-sans);
  font-size: 1.1875rem;
}
li.current {
  background-color: var(--il-blue);
  color: white;
}
li.ellipsis, li.previous span, li.first span, li.next span, li.last span, li.pagecount span {
  outline: none;
}
li.ellipsis {
    color: var(--il-storm);
}
li.pagecount span {
    margin-left: 20px;
}
a {
  font-weight: 500;
  text-decoration: none;
  color: var(--il-blue);
}
a:hover {
  background-color: var(--il-storm-lighter-3);
  text-decoration: underline;
}
a:focus {
  background-color: var(--ilw-link--focus-background-color);
  color: var(--ilw-link--focus-color);
  outline: var(--ilw-link--focus-outline);
  text-decoration: underline;
}
`;