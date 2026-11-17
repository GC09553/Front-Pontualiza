import logoUrl from './logo.jpeg';
import AccessPanel from '../../../components/AccessPanel';
import Sidebar from '../../../components/Sidebar';
import './index.css';

export const PortalPontualiza = () => (
  <div id="root">
    <Sidebar logoUrl={logoUrl} />
    <AccessPanel />
  </div>
);

export default PortalPontualiza;
