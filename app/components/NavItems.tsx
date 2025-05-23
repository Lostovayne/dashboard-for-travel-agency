import { cn } from "lib/utils";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = ({ handleClick }: { handleClick: VoidFunction }) => {
  const user = {
    name: "John Doe",
    email: "contact@john.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="nav-items h-screen">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink key={id} to={href}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item transition-colors", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user.name || "John Doe"}
          />
          <article>
            <h2>{user?.name || "John Doe"}</h2>
            <p>{user?.email || "jhon@doe.com"}</p>
          </article>
          <button
            onClick={() => {
              console.log("logout");
            }}
            className="cursor-pointer"
          >
            <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
          </button>
        </footer>
      </div>
    </section>
  );
};
export default NavItems;
