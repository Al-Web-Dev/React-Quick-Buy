export function Header() {
  return (
    <>
      <div className="serviceBar font-xs bg-[#d8e3e9] py-1">
        <ul className="flex justify-evenly">
          <li>
            <a href="#">Free Delivery</a>
          </li>
          <li>30 Day Returns</li>
        </ul>
      </div>
      <header>
        <nav className="flex justify-center gap-3 p-2 border bottom-2">
          <a href="#">Men</a>
          <a href="#">Women</a>
        </nav>
      </header>
    </>
  );
}
