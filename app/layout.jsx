import Nav from "@components/Nav";
import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptpeller.ai",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
