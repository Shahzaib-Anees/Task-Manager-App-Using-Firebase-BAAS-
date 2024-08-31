import "./navbar.css";
function Navbar() {
  return (
    <nav
      role="navigation"
      className="navbar flex p-4 px-7 justify-between items-center"
    >
      <div className="logo text-3xl font-normal color-[#62C6DA]">
        Task Management System
      </div>
    </nav>
  );
}

export default Navbar;
