function Header({ toggleSideBar, toggleDarkMode, dark }) {
  return (
    <header className="header">
      <button className="menu-btn" onClick={toggleSideBar}>
        Menu
      </button>

      <span className="brand">HashPlus</span>
      <button className="dark-btn" onClick={toggleDarkMode}>
        {dark ? "Light" : "Dark"}
      </button>
    </header>
  );
}

export default Header;
