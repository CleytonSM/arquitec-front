import { TopBar } from '../topbar/TopBar';

export const Layout = ({ children }) => {
    return (
        <div>
            <div className="topbar-divisor shadow-md">
                <TopBar />
            </div>
            <div className="content">{children}</div>
        </div>
      );
}