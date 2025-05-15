
import './index.css';
import Header from './components/Header';

function Wedding() {
  return (
    <div className="Wedding">
      <Header></Header>
      <main>
        <div class="container">
          <h1 class="h1head">Wedding Invitation</h1>
            <div class="ps">
              <p>We are excited to invite you to our wedding!</p>
              <p>Date: 25th December 2023</p>
              <p>Venue: The Grand Hall, City Center</p>
              <p>Time: 5:00 PM</p>
              <p>Please RSVP by 1st December 2023</p>
              <p>We look forward to celebrating with you!</p>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Wedding;
