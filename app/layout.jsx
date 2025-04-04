import Navbar from "@components/Navbar";
import "./globals.css"

export const metadata = {
  title: "SRI",
  description: "",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="">
            <Navbar/>
          </div>
        </div>

        <main className="website">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
