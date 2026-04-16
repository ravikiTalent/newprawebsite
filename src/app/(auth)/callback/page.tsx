import { useRouter } from 'next/navigation';

export default function CallbackPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="spinner-border mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h3>Completing sign in...</h3>
          <p className="text-muted">You will be redirected shortly.</p>
        </div>
      </div>
    </div>
  );
}
