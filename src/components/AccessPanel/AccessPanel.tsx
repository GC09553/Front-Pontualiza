import AccessCard from '../AccessCard/AccessCard';
import AccessHeader from '../AccessHeader/AccessHeader';
import PageFooter from '../PageFooter/PageFooter';
import SupportContact from '../SupportContact/SupportContact';

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
