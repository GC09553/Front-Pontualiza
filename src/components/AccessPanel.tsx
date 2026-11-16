import AccessCard from './AccessCard';
import AccessHeader from './AccessHeader';
import PageFooter from './PageFooter';
import SupportContact from './SupportContact';

export default function AccessPanel() {
  return (
    <main className="access-panel">
      <div className="access-content">
        <AccessHeader />

        <div className="cards-container">
          <AccessCard profile="employee" />
          <AccessCard profile="company" />
        </div>

        <SupportContact />
      </div>

      <PageFooter />
    </main>
  );
}
