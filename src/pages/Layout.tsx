import { Link, Outlet } from "react-router-dom"

const Footer = () => <footer>
    Pagina creada por Angel
    <Link to="/">Volver</Link>
</footer>

function Layout() {
    return (
        <main className="flex flex-col">
            <Outlet />
            <Footer />
        </main>
    )
}
 

export default Layout