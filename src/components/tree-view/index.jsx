import MenuList from './menu-list';
import './index.css';

export default function TreeView({ menus = [] }) {
  return (
    <>
      <h1 className="tree-h1">Tree view / Nested Links</h1>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
    </>
  );
}
